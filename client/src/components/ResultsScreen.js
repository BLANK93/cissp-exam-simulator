import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'; // <--- ADD useParams
import { getExamResults } from '../api/examAPI';

function ResultsScreen({ examResults }) {
  const location = useLocation();
  const { examSessionId: paramSessionId } = useParams(); // <--- Get ID from URL params
  
  const [results, setResults] = useState(examResults);
  const [loading, setLoading] = useState(!examResults);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all'); // State for overall correctness filter
  const [filterDomain, setFilterDomain] = useState('All'); // State for domain filter

  useEffect(() => {
    const fetchResults = async () => {
      // Determine the session ID to use: from URL params first, then from location.state
      const idToFetch = paramSessionId || location.state?.examSessionId;

      if (!results && idToFetch) { // If no results loaded yet AND we have an ID
        setLoading(true);
        try {
          const response = await getExamResults(idToFetch); // <--- Use the determined ID
          setResults(response.data);
        } catch (err) {
          setError(err.response?.data?.message || 'Failed to load results.');
        } finally {
          setLoading(false);
        }
      } else if (!results && !idToFetch) { // No results and no ID means user landed here incorrectly
        setError('No exam results available. Please take an exam first.');
        setLoading(false);
      }
    };
    fetchResults();
  }, [results, paramSessionId, location.state?.examSessionId]); // Add paramSessionId to dependencies

  if (loading) return <p>Loading results...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (!results) return <p>No results to display. Please complete an exam.</p>;

  // Ensure domainScores is destructured or accessed directly from results in JSX
  const { scorePercentage, detailedResults, status, isWeighted } = results; // <--- Add isWeighted to destructuring

  // CISSP Domain Weightings for comparison (hardcoded for display)
  const CISSP_DOMAIN_WEIGHTS_DISPLAY = {
    "Security and Risk Management": "16%",
    "Asset Security": "10%",
    "Security Architecture and Engineering": "13%",
    "Communication and Network Security": "13%",
    "Identity and Access Management": "13%",
    "Security Assessment and Testing": "12%",
    "Security Operations": "13%",
    "Software Development Security": "10%"
  };

  // CISSP_DOMAINS array for filter dropdown
  const CISSP_DOMAINS = [
    'Security and Risk Management',
    'Asset Security',
    'Security Architecture and Engineering',
    'Communication and Network Security',
    'Identity and Access Management',
    'Security Assessment and Testing',
    'Security Operations',
    'Software Development Security',
  ];

  return (
    <div className="results-screen">
      <h2>Exam Results</h2>
      <p className={`status ${status === 'timed-out' ? 'timed-out' : 'completed'}`}>
        Status: {status.replace('-', ' ')}
      </p>
      <p className="overall-score">Overall Score: {scorePercentage.toFixed(2)}%</p>

      {/* Conditional Rendering for Performance by CISSP Domain table */}
      {isWeighted && ( // <--- ONLY SHOW IF EXAM WAS WEIGHTED
        <>
          <h3>Performance by CISSP Domain</h3>
          <table className="domain-scores-table">
            <thead>
              <tr>
                <th>Domain</th>
                <th>Your Correct Answers</th>
                <th>Total Questions in Domain</th>
                <th>Your Percentage</th>
                <th>Official Weighting</th>
              </tr>
            </thead>
            <tbody>
              {results?.domainScores && Object.entries(results.domainScores).map(([domain, data]) => {
                const yourPercentage = data.total > 0 ? (data.correct / data.total) * 100 : 0;
                const officialWeight = CISSP_DOMAIN_WEIGHTS_DISPLAY[domain];

                return (
                  <tr key={domain}>
                    <td>{domain}</td>
                    <td>{data.correct}</td>
                    <td>{data.total}</td>
                    <td>{yourPercentage.toFixed(2)}%</td>
                    <td>{officialWeight}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}

      <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Question Review</h3>

      {/* Filter Buttons & Domain Filter */}
      <div className="filter-buttons" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
              onClick={() => setFilter('all')}
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
          >
              Show All Questions
          </button>
          <button
              onClick={() => setFilter('correct')}
              className={`filter-button ${filter === 'correct' ? 'active' : ''}`}
              style={{ marginLeft: '10px' }}
          >
              Show Correct Answers
          </button>
          <button
              onClick={() => setFilter('incorrect')}
              className={`filter-button ${filter === 'incorrect' ? 'active' : ''}`}
              style={{ marginLeft: '10px' }}
          >
              Show Incorrect Answers
          </button>

          <select
              value={filterDomain}
              onChange={(e) => setFilterDomain(e.target.value)}
              style={{ marginLeft: '10px', padding: '8px 15px', borderRadius: '5px', border: '1px solid #b2b9c0', fontSize: '0.95em' }}
              className="filter-button"
          >
              <option value="All">All Domains</option>
              {CISSP_DOMAINS.map(domain => (
                  <option key={domain} value={domain}>{domain}</option>
              ))}
          </select>
      </div>

      <div className="question-review-list">
        {detailedResults
            .filter(q => {
                let matchesCorrectness = true;
                if (filter === 'correct') {
                    matchesCorrectness = q.isCorrect;
                } else if (filter === 'incorrect') {
                    matchesCorrectness = !q.isCorrect;
                }
                const matchesDomain = filterDomain === 'All' || q.domain === filterDomain;
                return matchesCorrectness && matchesDomain;
            })
            .map((q, index) => (
            <div key={q.questionId} className={`question-review-item ${q.isCorrect ? 'correct' : 'incorrect'}`}>
              <h4>Question {index + 1}: {q.text}</h4>
              <ul className="options-list">
                {q.options.map((option, optIndex) => {
                    const correctAnswersArray = Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer];
                    const userAnswersArray = Array.isArray(q.userAnswer) ? q.userAnswer : (q.userAnswer ? [q.userAnswer] : []);

                    const isCorrectAnswerOption = correctAnswersArray.includes(option);
                    const isUserSelectedOption = userAnswersArray.includes(option);

                    let listItemClassName = '';
                    if (isCorrectAnswerOption) {
                        listItemClassName = 'correct-answer';
                    }
                    if (isUserSelectedOption && !isCorrectAnswerOption) {
                        listItemClassName = 'user-incorrect-answer';
                    }

                    return (
                        <li key={optIndex} className={listItemClassName}>
                            {option}
                            {isCorrectAnswerOption && <span className="badge correct-badge">Correct</span>}
                            {isUserSelectedOption && (
                                <span className={`badge ${isCorrectAnswerOption ? 'user-correct-badge' : 'user-incorrect-badge'}`}>
                                    Your Answer
                                </span>
                            )}
                        </li>
                    );
                })}
              </ul>
              <p className="explanation"><strong>Explanation:</strong> {q.explanation}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsScreen;