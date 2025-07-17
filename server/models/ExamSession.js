const mongoose = require('mongoose');

const ExamSessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  questionsAttempted: [ // This indicates an array of subdocuments
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
      userAnswer: { type: mongoose.Schema.Types.Mixed }, // User's selected answer for this question
      isCorrect: { type: Boolean }, // Whether the user's answer was correct
    }
],
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date
  },
  scorePercentage: {
    type: Number,
    default: 0
  },
  domainScores: { // Breakdown by domain, storing correct and total counts
    'Security and Risk Management': {
        correct: { type: Number, default: 0 },
        total: { type: Number, default: 0 }
    },
    'Asset Security': {
        correct: { type: Number, default: 0 },
        total: { type: Number, default: 0 }
    },
    'Security Architecture and Engineering': {
        correct: { type: Number, default: 0 },
        total: { type: Number, default: 0 }
    },
    'Communication and Network Security': {
        correct: { type: Number, default: 0 },
        total: { type: Number, default: 0 }
    },
    'Identity and Access Management': { 
        correct: { type: Number, default: 0 },
        total: { type: Number, default: 0 }
    },
    'Security Assessment and Testing': {
        correct: { type: Number, default: 0 },
        total: { type: Number, default: 0 }
    },
    'Security Operations': {
        correct: { type: Number, default: 0 },
        total: { type: Number, default: 0 }
    },
    'Software Development Security': {
        correct: { type: Number, default: 0 },
        total: { type: Number, default: 0 }
    },
},

  status: {
    type: String,
    enum: ['in-progress', 'completed', 'timed-out'],
    default: 'in-progress'
  },
    isWeighted: { // <--- ENSURE THIS FIELD IS HERE
    type: Boolean,
    default: true // Default to true if not explicitly set (e.g., for older exam sessions)
  }
}, { timestamps: true });

module.exports = mongoose.model('ExamSession', ExamSessionSchema);