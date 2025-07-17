const express = require('express');
const Question = require('../models/Question');
const User = require('../models/User');
const ExamSession = require('../models/ExamSession');
const ExamTemplate = require('../models/ExamTemplate');
const Certification = require('../models/Certification');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();

// --- CERTIFICATION MANAGEMENT ROUTES (Accessible to all logged-in users for GET, Admin only for CRUD) ---

// Get all certifications (This should be accessible to all logged-in users for WelcomeScreen dropdown)
router.get('/certifications', protect, async (req, res) => { // <--- Only 'protect', NO authorizeRoles('admin')
  try {
    const certs = await Certification.find({});
    res.status(200).json(certs);
  } catch (error) {
    console.error('Error fetching certifications:', error);
    res.status(500).json({ message: 'Error fetching certifications', error: error.message });
  }
});

// IMPORTANT: All routes BELOW this point will require 'admin' role.
// Apply admin authorization middleware for remaining routes in this router
router.use(protect, authorizeRoles('admin')); // <--- MOVED THIS LINE HERE

// --- Admin-specific routes (Require 'admin' role) ---

// --- QUESTION MANAGEMENT ROUTES ---

// Create a new question
router.post('/questions', async (req, res) => {
  try {
    const newQuestion = await Question.create(req.body);
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error('Error adding question:', error);
    res.status(400).json({ message: 'Error adding question', error: error.message });
  }
});

// Get all questions (for admin review)
router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find({});
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Error fetching questions', error: error.message });
  }
});

// Get a single question by ID
router.get('/questions/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json(question);
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ message: 'Error fetching question', error: error.message });
  }
});

// Update a question
router.put('/questions/:id', async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json(updatedQuestion);
  } catch (error) {
    console.error('Error updating question:', error);
    res.status(400).json({ message: 'Error updating question', error: error.message });
  }
});

// Delete a question
router.delete('/questions/:id', async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json({ message: 'Question deleted successfully!' });
  } catch (error) {
    console.error('Error deleting question:', error);
    res.status(500).json({ message: 'Error deleting question', error: error.message });
  }
});

// Import multiple questions (Admin only)
router.post('/questions/import', async (req, res) => {
  try {
    const questionsToImport = req.body;

    if (!Array.isArray(questionsToImport) || questionsToImport.length === 0) {
      return res.status(400).json({ message: 'Request body must be a non-empty array of questions.' });
    }

    const importResults = {
      successCount: 0,
      failCount: 0,
      errors: [],
      duplicateCount: 0
    };

    for (const qData of questionsToImport) {
      try {
        // Basic validation: ensure required fields are present
        if (!qData.text || !qData.options || !Array.isArray(qData.options) || qData.options.length < 2 || !qData.correctAnswer || !Array.isArray(qData.correctAnswer) || qData.correctAnswer.length === 0 || !qData.explanation || !qData.difficulty || !qData.questionType || !qData.certification) {
            importResults.failCount++;
            importResults.errors.push({ question: qData.text ? qData.text.substring(0, 50) + '...' : 'Unknown Question', reason: 'Missing or invalid required fields (excluding domain).' });
            continue;
        }

        // Check for duplicate questions (by text and certification)
        const existingQuestion = await Question.findOne({ text: qData.text, certification: qData.certification });
        if (existingQuestion) {
            importResults.duplicateCount++;
            importResults.errors.push({ question: qData.text.substring(0, 50) + '...', reason: `Duplicate question text for certification ${qData.certification} found, skipped.` });
            continue;
        }

        const newQuestion = await Question.create(qData);
        importResults.successCount++;
      } catch (error) {
        importResults.failCount++;
        importResults.errors.push({
          question: qData.text ? qData.text.substring(0, 50) + '...' : 'Unknown Question',
          reason: error.message
        });
      }
    }

    res.status(200).json({
      message: `Import complete: ${importResults.successCount} successful, ${importResults.duplicateCount} duplicates skipped, ${importResults.failCount} failed.`,
      details: importResults
    });

  } catch (error) {
    console.error('Error during question import:', error);
    res.status(500).json({ message: 'Failed to import questions', error: error.message });
  }
});

// --- USER MANAGEMENT ROUTES (Admin only) ---

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}).select('-password');
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users for admin panel:', error);
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

// Update a user's role by ID
router.put('/users/:id/role', async (req, res) => {
  try {
    const { role } = req.body;
    const userIdToUpdate = req.params.id;

    if (!['user', 'admin'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role specified.' });
    }

    if (req.user._id.toString() === userIdToUpdate.toString() && role === 'user') {
        return res.status(403).json({ message: 'Admins cannot revoke their own admin role via this interface.' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userIdToUpdate,
      { role: role },
      { new: true, runValidators: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user role:', error);
    res.status(400).json({ message: 'Error updating user role', error: error.message });
  }
});

// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
  try {
    const userIdToDelete = req.params.id;

    if (req.user._id.toString() === userIdToDelete.toString()) {
      return res.status(403).json({ message: 'Admins cannot delete their own account.' });
    }

    const deletedUser = await User.findByIdAndDelete(userIdToDelete);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json({ message: 'User deleted successfully!' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
});

// Get exam history for a specific user ID
router.get('/users/:userId/history', async (req, res) => {
  try {
    const targetUserId = req.params.userId;
    const examHistory = await ExamSession.find({ userId: targetUserId, status: 'completed' })
                                          .sort({ endTime: -1 });

    if (!examHistory) { // Check if history exists for the user
      return res.status(404).json({ message: 'No exam history found for this user.' });
    }

    res.status(200).json(examHistory);
  } catch (error) {
    console.error(`Error fetching history for user ${req.params.userId}:`, error);
    res.status(500).json({ message: 'Failed to fetch user history', error: error.message });
  }
});

// --- EXAM TEMPLATE MANAGEMENT ROUTES (Admin Only) ---

// Create a new exam template
router.post('/exam-templates', async (req, res) => {
  try {
    const newTemplate = await ExamTemplate.create(req.body);
    res.status(201).json(newTemplate);
  } catch (error) {
    console.error('Error creating exam template:', error);
    res.status(400).json({ message: 'Error creating exam template', error: error.message });
  }
});

// Get all exam templates
router.get('/exam-templates', async (req, res) => {
  try {
    const templates = await ExamTemplate.find({});
    res.status(200).json(templates);
  } catch (error) {
    console.error('Error fetching exam templates:', error);
    res.status(500).json({ message: 'Error fetching exam templates', error: error.message });
  }
});

// Update an exam template by ID
router.put('/exam-templates/:id', async (req, res) => {
  try {
    const updatedTemplate = await ExamTemplate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTemplate) {
      return res.status(404).json({ message: 'Exam template not found.' });
    }
    res.status(200).json(updatedTemplate);
  } catch (error) {
    console.error('Error updating exam template:', error);
    res.status(400).json({ message: 'Error updating exam template', error: error.message });
  }
});

// Delete an exam template by ID
router.delete('/exam-templates/:id', async (req, res) => {
  try {
    const deletedTemplate = await ExamTemplate.findByIdAndDelete(req.params.id);
    if (!deletedTemplate) {
      return res.status(404).json({ message: 'Exam template not found.' });
    }
    res.status(200).json({ message: 'Exam template deleted successfully!' });
  } catch (error) {
    console.error('Error deleting exam template:', error);
    res.status(500).json({ message: 'Error deleting exam template', error: error.message });
  }
});

// --- CERTIFICATION MANAGEMENT ROUTES (Admin Only for CRUD) ---

// Create a new certification
router.post('/certifications', async (req, res) => {
  try {
    const newCert = await Certification.create(req.body);
    res.status(201).json(newCert);
  } catch (error) {
    console.error('Error creating certification:', error);
    res.status(400).json({ message: 'Error creating certification', error: error.message });
  }
});

// Update a certification by ID
router.put('/certifications/:id', async (req, res) => {
  try {
    const updatedCert = await Certification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCert) {
      return res.status(404).json({ message: 'Certification not found.' });
    }
    res.status(200).json(updatedCert);
  } catch (error) {
    console.error('Error updating certification:', error);
    res.status(400).json({ message: 'Error updating certification', error: error.message });
  }
});

// Delete a certification by ID
router.delete('/certifications/:id', async (req, res) => {
  try {
    const deletedCert = await Certification.findByIdAndDelete(req.params.id);
    if (!deletedCert) {
      return res.status(404).json({ message: 'Certification not found.' });
    }
    res.status(200).json({ message: 'Certification deleted successfully!' });
  } catch (error) {
    console.error('Error deleting certification:', error);
    res.status(500).json({ message: 'Error deleting certification', error: error.message });
  }
});

module.exports = router;