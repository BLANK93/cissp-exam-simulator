// server/models/ExamTemplate.js

const mongoose = require('mongoose');

const ExamTemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    default: 'A custom exam template.'
  },
  numQuestions: {
    type: Number,
    required: true,
    min: 1
  },
  durationMs: {
    type: Number,
    required: true,
    min: 1 * 60 * 1000
  },
  isWeighted: {
    type: Boolean,
    default: true
  },
  certification: { // <--- ADD THIS NEW FIELD
    type: String,
    required: true,
    default: 'CISSP' // Default to CISSP, but can be 'CISM' etc.
  }
}, { timestamps: true });

module.exports = mongoose.model('ExamTemplate', ExamTemplateSchema);