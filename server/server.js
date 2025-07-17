require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const examRoutes = require('./routes/examRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 5000; // Will correctly pick up 5001 from.env
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing [1, 2, 3]
app.use(express.json()); // Parses incoming JSON requests [1, 2]

// Connect to MongoDB
mongoose.connect(MONGO_URI)
.then(() => {
    console.log('MongoDB connected successfully');
    // Start the server ONLY after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
 })
.catch(err => {
    console.error('MongoDB connection error:', err);
    // If the database connection fails, it's critical, so exit the process
    process.exit(1); // Exit with a non-zero code to indicate failure
 });

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/exam', examRoutes);
app.use('/api/admin', adminRoutes); // Protect this route with authentication/authorization middleware

// Serve static files from the React app in production
// This part is for when you deploy, not for local development
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}