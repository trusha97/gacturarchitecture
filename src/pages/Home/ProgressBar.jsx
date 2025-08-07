import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-header">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
