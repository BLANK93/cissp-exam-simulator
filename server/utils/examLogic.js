const Question = require('../models/Question');
const ExamSession = require('../models/ExamSession');

const CISSP_DOMAIN_WEIGHTS = {
  'Security and Risk Management': 0.16,
  'Asset Security': 0.10,
  'Security Architecture and Engineering': 0.13,
  'Communication and Network Security': 0.13,
  'Identity and Access Management': 0.13,
  'Security Assessment and Testing': 0.12,
  'Security Operations': 0.13,
  'Software Development Security': 0.10,
};

// Define default values for full exams
const DEFAULT_FULL_EXAM_QUESTIONS = 150;
const DEFAULT_FULL_EXAM_DURATION_MS = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

/**
 * Selects questions for an exam based on criteria.
 * @param {string} userId - ID of the user taking the exam.
 * @param {number} numQuestions - Total number of questions to select.
 * @param {string} selectedDomain - Specific domain to select from ('All' for all domains).
 * @param {number} examDuration - Duration of the exam in milliseconds.
 * @param {boolean} isWeighted - True if selection should respect domain weights, false for random from all.
 * @param {string} selectedCertification - The certification to draw questions from (e.g., 'CISSP', 'CISM').
 * @returns {object} An object containing the selected questions array and the exam duration.
 */
async function selectWeightedQuestions(
  userId,
  numQuestions = DEFAULT_FULL_EXAM_QUESTIONS,
  selectedDomain = 'All',
  examDuration = DEFAULT_FULL_EXAM_DURATION_MS,
  isWeighted = true, // <--- NEW PARAMETER: Defaults to true for existing weighted logic
  selectedCertification = 'CISSP' // <--- NEW PARAMETER: Defaults to CISSP
) {

  let selectedQuestions = [];
  let userUsedQuestionIds = await getUserUsedQuestions(userId);

  //console.log('DEBUG: --- Starting selectWeightedQuestions (Dynamic Exam) ---');
  //console.log(`DEBUG: User ${userId}, Requested Questions: ${numQuestions}, Domain: "${selectedDomain}", Duration: ${examDuration / 60000} min., Is Weighted: ${isWeighted}, Certification: ${selectedCertification}`);
  //console.log(`DEBUG: User has ${userUsedQuestionIds.length} previously used questions.`);

  // Get ALL active questions for the selected certification (for total count/history reset check)
  const allQuestionIdsInDB = (await Question.find({ isActive: true, certification: selectedCertification }, '_id')).map(q => q._id.toString()); // <--- FILTER BY CERTIFICATION
  if (userUsedQuestionIds.length >= allQuestionIdsInDB.length && allQuestionIdsInDB.length > 0) {
      //console.warn(`WARNING: User ${userId} has attempted all available unique questions for ${selectedCertification} (${userUsedQuestionIds.length}/${allQuestionIdsInDB.length}). History will be effectively cleared for this exam selection.`);
      userUsedQuestionIds = []; // Temporarily clear user's used question IDs for this selection process
  }


  // --- Main Logic Branching based on isWeighted and selectedDomain ---
  if (!isWeighted) {
    // Option 1: Not Weighted (e.g., CISM exam, or a custom unweighted CISSP exam)
    //console.log(`DEBUG: Exam Mode: Non-Weighted, selecting ${numQuestions} questions from Certification "${selectedCertification}"`);
    let availableQuestions = await Question.find({
      certification: selectedCertification, // <--- Filter by Certification
      isActive: true,
      _id: { $nin: userUsedQuestionIds }
    }).lean();

    if (availableQuestions.length < numQuestions) {
      //console.warn(`WARNING: Not enough unique questions (${availableQuestions.length}) for certification: "${selectedCertification}" (Target: ${numQuestions}). Supplementing with previously used questions.`);
      availableQuestions = await Question.find({ certification: selectedCertification, isActive: true }).lean(); // Get all if short
    }
    selectedQuestions = availableQuestions.sort(() => 0.5 - Math.random()).slice(0, numQuestions);
    //console.log(`DEBUG: Selected ${selectedQuestions.length} questions for Non-Weighted exam.`);

  } else if (selectedDomain !== 'All') {
    // Option 2: Weighted AND Specific Domain (e.g., Mock Exam on a specific CISSP domain)
    // This path is for a weighted exam that also filters by a specific domain.
    //console.log(`DEBUG: Quick Exam Mode: Selecting ${numQuestions} questions from domain "${selectedDomain}" in Certification "${selectedCertification}"`);
    let availableDomainQuestions = await Question.find({
      domain: selectedDomain,
      certification: selectedCertification, // <--- Filter by Certification
      isActive: true,
      _id: { $nin: userUsedQuestionIds }
    }).lean();

    if (availableDomainQuestions.length < numQuestions) {
      //console.warn(`WARNING: Not enough unique questions (${availableDomainQuestions.length}) for domain: "${selectedDomain}" (Target: ${numQuestions}). Supplementing with previously used questions.`);
      availableDomainQuestions = await Question.find({ domain: selectedDomain, certification: selectedCertification, isActive: true }).lean(); // Get all if short
    }
    selectedQuestions = availableDomainQuestions.sort(() => 0.5 - Math.random()).slice(0, numQuestions);
    //console.log(`DEBUG: Selected ${selectedQuestions.length} questions from "${selectedDomain}" domain.`);

  } else {
    // Option 3: Weighted AND All Domains (e.g., Full CISSP Exam or a weighted mock exam)
    //console.log(`DEBUG: Full/Weighted Exam Mode: Selecting ${numQuestions} questions across all domains in Certification "${selectedCertification}".`);
    const totalQuestionsForWeightedSelection = numQuestions; // Use passed numQuestions as total target

    for (const domain in CISSP_DOMAIN_WEIGHTS) {
      const targetCount = Math.round(totalQuestionsForWeightedSelection * CISSP_DOMAIN_WEIGHTS[domain]);
      //console.log(`DEBUG:   Domain: "${domain}", Target Count: ${targetCount}`);

      let domainQuestions = await Question.find({
        domain: domain,
        certification: selectedCertification, // <--- Filter by Certification
        isActive: true,
        _id: { $nin: userUsedQuestionIds }
      }).lean();

      //console.log(`DEBUG:     Found ${domainQuestions.length} UNIQUE questions for "${domain}".`);

      if (domainQuestions.length < targetCount) {
        //console.warn(`WARNING: Not enough unique questions (${domainQuestions.length}) for domain: "${domain}" (Target: ${targetCount}). Supplementing with previously used questions if necessary.`);
        const allDomainQuestions = await Question.find({ domain: domain, certification: selectedCertification, isActive: true }).lean();

        const currentDomainSelections = [...domainQuestions];
        const neededMore = targetCount - currentDomainSelections.length;
        if (neededMore > 0) {
            const usedAndAvailable = allDomainQuestions.filter(q =>
                !currentDomainSelections.some(s => s._id.equals(q._id))
            );
            currentDomainSelections.push(...usedAndAvailable.sort(() => 0.5 - Math.random()).slice(0, neededMore));
        }
        domainQuestions = currentDomainSelections;
        //console.log(`DEBUG:     Domain "${domain}" questions after supplementation: ${domainQuestions.length}`);
      }

      const questionsToAdd = domainQuestions.sort(() => 0.5 - Math.random()).slice(0, targetCount);
      selectedQuestions.push(...questionsToAdd);
      //console.log(`DEBUG:     Added ${questionsToAdd.length} questions from "${domain}". Total selected so far: ${selectedQuestions.length}`);
    }
  }
  // --- END Main Logic Branching ---

  selectedQuestions = selectedQuestions.sort(() => 0.5 - Math.random());
  //console.log(`DEBUG: Final selected questions count: ${selectedQuestions.length}`);
  //console.log('DEBUG: --- selectWeightedQuestions finished ---');

  return { questions: selectedQuestions, duration: examDuration };
}

async function getUserUsedQuestions(userId) {
  const pastExams = await ExamSession.find({ userId: userId, status: 'completed' });
  const usedIds = new Set();
  pastExams.forEach(exam => {
    exam.questionsAttempted.forEach(qa => {
        if (qa.questionId) usedIds.add(qa.questionId.toString());
    });
  });

  //console.log(`DEBUG: getUserUsedQuestions for User ${userId}: Found ${usedIds.size} unique questions from past exams.`);
  return Array.from(usedIds);
}

// calculateScore function (kept as is, it's already updated for multi-response)
async function calculateScore(userAnswers, startTime, submissionTime) {
  const EXAM_DURATION_MS_FOR_SCORING_CHECK = 3 * 60 * 60 * 1000; // Use a constant for the check, or pass it

  const isTimedOut = (submissionTime.getTime() - startTime.getTime()) > EXAM_DURATION_MS_FOR_SCORING_CHECK;

  let correctCount = 0;
  const domainScores = {
    'Security and Risk Management': { correct: 0, total: 0 },
    'Asset Security': { correct: 0, total: 0 },
    'Security Architecture and Engineering': { correct: 0, total: 0 },
    'Communication and Network Security': { correct: 0, total: 0 },
    'Identity and Access Management': { correct: 0, total: 0 },
    'Security Assessment and Testing': { correct: 0, total: 0 },
    'Security Operations': { correct: 0, total: 0 },
    'Software Development Security': { correct: 0, total: 0 },
  };
  const questionsAttemptedDetails = [];

  const questionIdsInExam = userAnswers.map(ans => ans.questionId);
  const questionsData = await Question.find({ _id: { $in: questionIdsInExam } });
  const questionMap = new Map(questionsData.map(q => [q._id.toString(), q]));

  //console.log("DEBUG: --- Starting calculateScore ---");
  //console.log("DEBUG: User Answers received:", userAnswers.length);
  //console.log("DEBUG: Questions fetched from DB for scoring:", questionsData.length);

  for (const userAnswer of userAnswers) {
    const question = questionMap.get(userAnswer.questionId.toString());

    if (question) {
      let isCorrect;

      if (question.questionType === 'multi-response') {
        const correctAnswers = question.correctAnswer || [];
        const userSelectedAnswers = Array.isArray(userAnswer.userAnswer) ? userAnswer.userAnswer : [];

        //console.log(`DEBUG: Multi-response scoring - QID: ${question._id.toString().substring(0,6)}`);
        //console.log(`DEBUG:   correctAnswers (before sort):`, correctAnswers, `Type:`, typeof correctAnswers, `isArray:`, Array.isArray(correctAnswers));
        //console.log(`DEBUG:   userSelectedAnswers (before sort):`, userSelectedAnswers, `Type:`, typeof userSelectedAnswers, `isArray:`, Array.isArray(userSelectedAnswers));

        // Sort arrays for consistent comparison (all elements must match)
        correctAnswers.sort();
        userSelectedAnswers.sort();

        //console.log(`DEBUG:   correctAnswers (after sort):`, correctAnswers);
        //console.log(`DEBUG:   userSelectedAnswers (after sort):`, userSelectedAnswers);

        // Check if arrays are identical (same length AND every element matches in order)
        isCorrect = correctAnswers.length === userSelectedAnswers.length &&
                    correctAnswers.every((val, index) => val === userSelectedAnswers[index]);

        //console.log(`DEBUG: Multi-response check - Match: ${isCorrect}`);

      } else { // Default to single-choice if type is not multi-response
        const singleCorrectAnswer = question.correctAnswer && question.correctAnswer.length > 0 ? question.correctAnswer[0] : null;

        isCorrect = singleCorrectAnswer === userAnswer.userAnswer;

        //console.log(`DEBUG: Single-choice check - QID: ${question._id.toString().substring(0,6)}, Correct: "${singleCorrectAnswer}", User: "${userAnswer.userAnswer}", Match: ${isCorrect}`);
      }

      questionsAttemptedDetails.push({
        questionId: question._id,
        userAnswer: userAnswer.userAnswer,
        isCorrect: isCorrect,
      });

      if (isCorrect) {
        correctCount++;
        //console.log("DEBUG: Correct answer! correctCount is now:", correctCount);
      }

      if (domainScores[question.domain]) {
        domainScores[question.domain].total++;
        if (isCorrect) {
          domainScores[question.domain].correct++;
          //console.log(`DEBUG: Domain ${question.domain} correct count is now:`, domainScores[question.domain].correct);
        }
      }
    } else {
        //console.warn(`WARNING: Question ID ${userAnswer.questionId} not found in database during scoring. This should ideally not happen.`);
    }
  }

  const totalQuestionsAttempted = questionsAttemptedDetails.length;
  const scorePercentage = totalQuestionsAttempted > 0 ? (correctCount / totalQuestionsAttempted) * 100 : 0;

  const domainScoresForDB = {};
  for (const domain in domainScores) {
      domainScoresForDB[domain] = {
          correct: domainScores[domain].correct,
          total: domainScores[domain].total
      };
  }

  //console.log("DEBUG: Final correctCount (overall):", correctCount);
  //console.log("DEBUG: Final raw domainScores (for DB storage):", domainScoresForDB);
  //console.log("DEBUG: Final calculated scorePercentage (overall):", scorePercentage);
  //console.log("DEBUG: --- calculateScore finished ---");

  return {
      scorePercentage,
      domainScores: domainScoresForDB,
      isTimedOut,
      questionsAttemptedDetails
  };
}

module.exports = {
  selectWeightedQuestions,
  calculateScore,
  DEFAULT_FULL_EXAM_QUESTIONS, // Export defaults
  DEFAULT_FULL_EXAM_DURATION_MS // Export defaults
};