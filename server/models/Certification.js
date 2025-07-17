const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Certification names must be unique
    trim: true,
    uppercase: true // Store names in uppercase for consistency (e.g., 'CISSP', 'CISM', 'K8S')
  },
  description: {
    type: String,
    default: 'A professional certification.'
  }
}, { timestamps: true });

module.exports = mongoose.model('Certification', CertificationSchema);