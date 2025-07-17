const express = require('express');
const ExamSession = require('../models/ExamSession');
const Question = require('../models/Question');
const ExamTemplate = require('../models/ExamTemplate');
const { selectWeightedQuestions, calculateScore, DEFAULT_FULL_EXAM_QUESTIONS, DEFAULT_FULL_EXAM_DURATION_MS } = require('../utils/examLogic');
const { protect, authorizeRoles } = require('../middleware/authMiddleware'); // Ensure authorizeRoles is imported, but NOT used on /start
const mongoose = require('mongoose');

const router = express.Router();

// IMPORTANT: Do NOT apply authorizeRoles('admin') here if you want non-admins to take exams.
// router.use(protect, authorizeRoles('admin')); // <-- This line should NOT be here if it exists


// Start a new exam session
// This route requires 'protect' (user is logged in), but NOT 'authorizeRoles('admin')'
router.post('/start', protect, async (req, res) => { // <--- ENSURE ONLY 'protect' IS HERE
  try {
    const userId = req.user._id;
    const {
      templateId = null,
      numQuestions: requestedNumQuestions = DEFAULT_FULL_EXAM_QUESTIONS,
      selectedDomain = 'All',
      examDuration: requestedExamDuration = DEFAULT_FULL_EXAM_DURATION_MS,
      isWeighted: requestedIsWeighted = true,
      selectedCertification: requestedCertification = 'CISSP'
    } = req.body;

    let finalNumQuestions;
    let finalExamDuration;
    let finalIsWeighted;
    let finalSelectedCertification;
    let finalSelectedDomain = selectedDomain;

    if (templateId === 'full-exam') {
        finalNumQuestions = DEFAULT_FULL_EXAM_QUESTIONS;
        finalExamDuration = DEFAULT_FULL_EXAM_DURATION_MS;
        finalIsWeighted = true;
        finalSelectedCertification = 'CISSP';
        finalSelectedDomain = 'All';
    } else if (templateId === 'mock-exam') {
        finalNumQuestions = 60;
        finalExamDuration = 90 * 60 * 1000;
        finalIsWeighted = true;
        finalSelectedCertification = 'CISSP';
        finalSelectedDomain = selectedDomain;
    } else if (templateId) {
        if (!mongoose.Types.ObjectId.isValid(templateId)) {
            return res.status(400).json({ message: 'Invalid exam template ID format.' });
        }
        const template = await ExamTemplate.findById(templateId);
        if (!template) {
            return res.status(404).json({ message: 'Custom exam template not found.' });
        }
        finalNumQuestions = template.numQuestions;
        finalExamDuration = template.durationMs;
        finalIsWeighted = template.isWeighted;
        finalSelectedCertification = template.certification;
        finalSelectedDomain = template.isWeighted ? selectedDomain : 'All';
    } else {
        finalNumQuestions = requestedNumQuestions;
        finalExamDuration = requestedExamDuration;
        finalIsWeighted = requestedIsWeighted;
        finalSelectedCertification = requestedCertification;
        finalSelectedDomain = requestedIsWeighted ? selectedDomain : 'All';
    }
    
    const { questions: selectedQuestions, duration: actualExamDuration } = await selectWeightedQuestions(
      userId,
      finalNumQuestions,
      finalSelectedDomain,
      finalExamDuration,
      finalIsWeighted,
      finalSelectedCertification
    );

    if (selectedQuestions.length === 0) {
      return res.status(404).json({ message: 'No questions available to start an exam based on your criteria. Try adding more questions for this certification/domain.' });
    }

    const newExamSession = new ExamSession({
      userId,
      startTime: new Date(),
      questionsAttempted: selectedQuestions.map(q => ({ questionId: new mongoose.Types.ObjectId(q._id) })),
      duration: actualExamDuration,
      status: 'in-progress',
      isWeighted: finalIsWeighted
    });
    await newExamSession.save();

    const questionsForClient = selectedQuestions.map(q => ({
      _id: q._id,
      text: q.text,
      options: q.options,
      domain: q.domain,
      questionType: q.questionType
    }));

    res.status(201).json({
      examSessionId: newExamSession._id,
      questions: questionsForClient,
      startTime: newExamSession.startTime,
      duration: actualExamDuration
    });
  } catch (error) {
    console.error('Error starting exam:', error);
    res.status(500).json({ message: 'Failed to start exam', error: error.message });
  }
});

// Submit exam answers (Remains unchanged)
router.post('/submit', protect, async (req, res) => {
  const { examSessionId, userAnswers } = req.body;
  const examSubmissionTime = new Date();

  try {
    const examSession = await ExamSession.findById(examSessionId);

    if (!examSession || examSession.userId.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: 'Exam session not found or unauthorized.' });
    }
    if (examSession.status !== 'in-progress') {
      return res.status(400).json({ message: 'Exam already completed or timed out.' });
    }

    const { scorePercentage, domainScores, isTimedOut, questionsAttemptedDetails } = await calculateScore(
      userAnswers,
      examSession.startTime,
      examSubmissionTime,
      examSession.duration
    );

    examSession.questionsAttempted = questionsAttemptedDetails;
    examSession.endTime = examSubmissionTime;
    examSession.scorePercentage = scorePercentage;
    examSession.domainScores = domainScores;
    examSession.status = isTimedOut ? 'timed-out' : 'completed';

    await examSession.save();

    const questionIds = questionsAttemptedDetails.map(q => q.questionId);
    const questionsWithDetails = await Question.find({ _id: { $in: questionIds } });
    const questionDetailsMap = new Map(questionsWithDetails.map(q => [q._id.toString(), q]));

    const detailedResults = questionsAttemptedDetails.map(attempt => {
      const question = questionDetailsMap.get(attempt.questionId.toString());
      return {
        questionId: attempt.questionId,
        text: question.text,
        options: question.options,
        userAnswer: attempt.userAnswer,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
        isCorrect: attempt.isCorrect,
        domain: question.domain,
        questionType: question.questionType
      };
    });

    res.status(200).json({
      message: isTimedOut ? 'Exam timed out and submitted.' : 'Exam submitted successfully.',
      scorePercentage,
      domainScores: domainScores,
      detailedResults,
      status: examSession.status
    });

  } catch (error) {
    console.error('Error submitting exam:', error);
    res.status(500).json({ message: 'Failed to submit exam', error: error.message });
  }
});

// Get past exam results for a user (for detailed review) - (Remains unchanged)
router.get('/results/:examSessionId', protect, async (req, res) => {
  try {
    const examSession = await ExamSession.findById(req.params.examSessionId);

    if (!examSession || examSession.userId.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: 'Exam session not found or unauthorized.' });
    }

    const questionIds = examSession.questionsAttempted.map(q => q.questionId);
    const questionsWithDetails = await Question.find({ _id: { $in: questionIds } });
    const questionDetailsMap = new Map(questionsWithDetails.map(q => [q._id.toString(), q]));

    const detailedResults = examSession.questionsAttempted.map(attempt => {
      const question = questionDetailsMap.get(attempt.questionId.toString());
      return {
        questionId: attempt.questionId,
        text: question.text,
        options: question.options,
        userAnswer: attempt.userAnswer,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
        isCorrect: attempt.isCorrect,
        domain: question.domain,
        questionType: question.questionType
      };
    });

    res.status(200).json({
      scorePercentage: examSession.scorePercentage,
      domainScores: examSession.domainScores,
      detailedResults,
      status: examSession.status,
      startTime: examSession.startTime,
      endTime: examSession.endTime,
      duration: examSession.duration,
      isWeighted: examSession.isWeighted
    });

  } catch (error) {
    console.error('Error fetching exam results:', error);
    res.status(500).json({ message: 'Failed to fetch exam results', error: error.message });
  }
});

// Get all past exam results for the authenticated user (for history graph/table) - (Remains unchanged)
router.get('/history', protect, async (req, res) => {
  try {
    const userId = req.user._id;
    const examHistory = await ExamSession.find({ userId: userId, status: 'completed' })
                                          .sort({ endTime: -1 })
                                          .select('scorePercentage endTime status duration');

    res.status(200).json(examHistory);
  } catch (error) {
    console.error('Error fetching exam history:', error);
    res.status(500).json({ message: 'Failed to fetch exam history', error: error.message });
  }
});

// These routes require admin authorization
router.use(protect, authorizeRoles('admin')); // Apply admin middleware to all routes below this line

// ... (All admin question, user, and template management routes go here) ...
// This code block assumes the following routes are defined below this line:
// router.post('/questions', ...)
// router.get('/questions', ...)
// router.get('/questions/:id', ...)
// router.put('/questions/:id', ...)
// router.delete('/questions/:id', ...)
// router.post('/questions/import', ...)
// router.get('/users', ...)
// router.put('/users/:id/role', ...)
// router.delete('/users/:id', ...)
// router.get('/users/:userId/history', ...)
// router.post('/exam-templates', ...)
// router.get('/exam-templates', ...)
// router.put('/exam-templates/:id', ...)
// router.delete('/exam-templates/:id', ...)
// router.post('/certifications', ...)
// router.get('/certifications', ...)
// router.put('/certifications/:id', ...)
// router.delete('/certifications/:id', ...)


module.exports = router;