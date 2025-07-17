import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import WelcomeScreen from './components/WelcomeScreen';
import ExamScreen from './components/ExamScreen';
import ResultsScreen from './components/ResultsScreen';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import Register from './components/Register';
import ScoreHistory from './components/ScoreHistory';

function App() {
  const [user, setUser] = useState(null); // Store logged-in user info
  const [examState, setExamState] = useState({
    examSessionId: null,
    questions: [],
    startTime: null,
    duration: null,
    userAnswers: [], // { questionId: '...', userAnswer: '...' or ['...', '...'] }
    currentQuestionIndex: 0,
  });
  const [examResults, setExamResults] = useState(null); // Store results after submission
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // <--- NEW STATE FOR THEME

  // Effect to apply theme class and save to localStorage
  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode'); // Remove old classes
    document.body.classList.add(theme + '-mode'); // Add current theme class (e.g., 'dark-mode')
    localStorage.setItem('theme', theme); // Save user's preference
  }, [theme]); // Rerun this effect when the 'theme' state changes

  useEffect(() => {
    // Check for user in localStorage on app load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // Reset exam-related states on logout
    setExamState({
      examSessionId: null,
      questions: [],
      startTime: null,
      duration: null,
      userAnswers: [],
      currentQuestionIndex: 0,
    });
    setExamResults(null);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-brand">Exam Prep 101</Link> {/* Updated text */}
          <div className="nav-links">
            {user ? (
              <>
                <span>Welcome, {user.username} ({user.role})</span>
                <Link to="/history">Score History</Link>
                {user.role === 'admin' && <Link to="/admin">Admin Panel</Link>}
                
                {/* --- NEW: DARK MODE TOGGLE BUTTON --- */}
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="theme-toggle-button">
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
                {/* --- END NEW BUTTON --- */}

                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<WelcomeScreen user={user} setExamState={setExamState} />} />
            <Route path="/results/:examSessionId" element={
              user ? (
                <ResultsScreen examResults={examResults} />
              ) : (
                <p>Please log in to view results.</p>
              )
            } />
            <Route path="/exam" element={
              user ? (
                <ExamScreen
                  examState={examState}
                  setExamState={setExamState}
                  setExamResults={setExamResults}
                  user={user}
                />
              ) : (
                <p>Please log in to take an exam.</p>
              )
            } />
            <Route path="/history" element={
              user ? (
                <ScoreHistory />
              ) : (
                <p>Please log in to view your exam history.</p>
              )
            } />
            <Route path="/admin/users/:userId/history" element={
              user && user.role === 'admin' ? (
                <ScoreHistory />
              ) : (
                <p>Access Denied. Admins only.</p>
              )
            } />
            <Route path="/admin" element={
              user && user.role === 'admin' ? (
                <AdminPanel user={user} />
              ) : (
                <p>Access Denied. Admins only.</p>
              )
            } />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;