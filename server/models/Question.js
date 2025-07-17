const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: {
    type: [String], // Array of strings for multiple-choice options
    required: true
  },
  correctAnswer: { // Stores the correct answer text or index
    type: [String], // Allow multiple correct answers for flexibility
    required: true
  },
  explanation: {
    type: String,
    required: true
  },
  domain: { // CISSP domain
    type: String,
    required: false, // <--- CHANGED: Now optional to allow non-CISSP questions without specific domains
    enum: ['Security and Risk Management', 'Asset Security', 'Security Architecture and Engineering', 'Communication and Network Security', 'Identity and Access Management', 'Security Assessment and Testing', 'Security Operations', 'Software Development Security']
  },
  certification: { // <--- NEW FIELD: Certification this question belongs to
    type: String,
    required: true, // This field is critical and must be present
    default: 'CISSP' // Default to CISSP for existing or unspecified questions
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium'
  },
  questionType: { // Type of question (e.g., multiple-choice, true/false)
    type: String,
    enum: ['single-choice', 'multi-response'],
    default: 'single-choice'
  },
  lastUsed: { // To track when a question was last used by any user for overall pool management
    type: Date,
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Question', QuestionSchema);