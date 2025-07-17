import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'; // Import Line chart from react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; // Import Chart.js components
import { getExamHistory, getUserHistoryAsAdmin } from '../api/examAPI'; // <--- Import getUserHistoryAsAdmin
import { useParams, useNavigate } from 'react-router-dom'; // <--- ADD useParams, ensure useNavigate

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ScoreHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { userId: paramUserId } = useParams(); // <--- Get userId from URL params (if admin is viewing)
  const navigate = useNavigate(); // <--- Initialize useNavigate

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true); // Set loading to true each time fetchHistory runs
      try {
        let response;
        if (paramUserId) { // If userId is in URL, it's an admin viewing another user's history
          response = await getUserHistoryAsAdmin(paramUserId);
        } else { // Otherwise, it's the current user viewing their own history
          response = await getExamHistory();
        }
        // Sort history by endTime ascending for correct graph display (oldest to newest)
        const sortedHistory = response.data.sort((a, b) => new Date(a.endTime) - new Date(b.endTime));
        setHistory(sortedHistory);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load score history.');
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [paramUserId]); // <--- Add paramUserId to dependencies so it refetches if viewing a different user

  if (loading) return <p>Loading score history...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (history.length === 0) return <p>No exam history found. Take an exam to see your progress!</p>;

  // Prepare data for Chart.js
  const chartData = {
    labels: history.map((exam, index) => `Exam ${index + 1} (${new Date(exam.endTime).toLocaleDateString()})`),
    datasets: [
      {
        label: 'Overall Score (%)',
        data: history.map(exam => exam.scorePercentage.toFixed(2)),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.1,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: paramUserId ? `Exam Score Progress for User ID: ${paramUserId.substring(0, 6)}...` : 'Your Exam Score Progress Over Time', // Dynamic chart title
        font: { size: 18 }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + '%';
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: 'Score (%)'
        }
      }
    }
  };

  return (
    <div className="score-history-screen">
      <h2>{paramUserId ? `Exam History for User ID: ${paramUserId.substring(0, 6)}...` : "Your Exam History"}</h2> {/* Dynamic page title */}
      {/* Chart Display */}
      <div style={{ width: '80%', margin: '20px auto' }}>
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Table of past results (optional, but good for detail) */}
      <h3 style={{ marginTop: '40px' }}>Past Exam Details</h3>
      <table className="domain-scores-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr>
            <th>Exam #</th>
            <th>Date</th>
            <th>Overall Score</th>
            <th>Status</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {history.map((exam, index) => (
            <tr key={exam._id}>
              <td>{index + 1}</td>
              <td>{new Date(exam.endTime).toLocaleString()}</td>
              <td>{exam.scorePercentage.toFixed(2)}%</td>
              <td>{exam.status}</td>
              <td>
                {/* Use navigate to results screen, passing exam._id in URL parameter */}
                <button onClick={() => navigate(`/results/${exam._id}`)} className="edit-button">View</button> {/* <--- UPDATED onClick */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScoreHistory;