const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // Load .env from parent directory

// Import Mongoose Models
const Question = require('../models/Question');
const User = require('../models/User');
const ExamSession = require('../models/ExamSession');
const ExamTemplate = require('../models/ExamTemplate');
const Certification = require('../models/Certification');

const MONGO_URI = process.env.MONGO_URI;

const seedData = {
  questions: JSON.parse(fs.readFileSync(path.resolve(__dirname, 'questions.json'), 'utf8')),
  users: JSON.parse(fs.readFileSync(path.resolve(__dirname, 'users.json'), 'utf8')),
  // examsessions: JSON.parse(fs.readFileSync(path.resolve(__dirname, 'examsessions.json'), 'utf8')), // Optional: You might not want to seed old exam results
  examtemplates: JSON.parse(fs.readFileSync(path.resolve(__dirname, 'examtemplates.json'), 'utf8')),
  certifications: JSON.parse(fs.readFileSync(path.resolve(__dirname, 'certifications.json'), 'utf8')),
};

const importData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected for seeding...');

    // Clear existing data (use with CAUTION in production, only for initial setup!)
    // In production, you might only want to insert if collection is empty.
    console.log('Clearing existing data (if any) in target collections...');
    await Question.deleteMany();
    await User.deleteMany();
    // await ExamSession.deleteMany(); // Only if you want to wipe old exam results too
    await ExamTemplate.deleteMany();
    await Certification.deleteMany();
    console.log('Collections cleared.');

    // Insert new data
    console.log('Importing data...');
    await Question.insertMany(seedData.questions);
    await User.insertMany(seedData.users);
    // if (seedData.examsessions) await ExamSession.insertMany(seedData.examsessions);
    await ExamTemplate.insertMany(seedData.examtemplates);
    await Certification.insertMany(seedData.certifications);
    console.log('Data successfully imported!');

    process.exit(); // Exit the script gracefully
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1); // Exit with error code
  }
};

importData();