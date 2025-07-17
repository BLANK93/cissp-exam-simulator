import React from 'react';

function ProgressBar({ current, total }) {
  const percentage = total > 0? (current / total) * 100 : 0;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{ width: `${percentage}%` }}>
        {Math.round(percentage)}%
      </div>
    </div>
  );
}

export default ProgressBar;