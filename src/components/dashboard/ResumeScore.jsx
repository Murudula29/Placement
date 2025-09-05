import React from "react";
import '../../styles/ResumeScore.css';

export default function ResumeScore() {
  // Example static data (later you can fetch actual score from backend/AI model)
  const score = 78;
  const improvements = [
    "Add more keywords related to your skills.",
    "Keep resume length under 2 pages.",
    "Include measurable achievements (e.g., 'Increased sales by 20%').",
    "Make sure formatting is ATS-friendly.",
  ];

  return (
    <div className="resume-score-container">
      <h2 className="title">📄 Resume Score</h2>

      <div className="score-section">
        <div className="score-circle">
          <svg viewBox="0 0 36 36">
            <path
              className="circle-bg"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle-progress"
              strokeDasharray={`${score}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="circle-text">
              {score}%
            </text>
          </svg>
        </div>
        <p className="score-message">
          Your resume looks <strong>{score >= 70 ? "Good" : "Needs Work"}</strong>!
        </p>
      </div>

      <div className="improvement-section">
        <h3>✨ Suggestions to Improve</h3>
        <ul>
          {improvements.map((tip, index) => (
            <li key={index}>✅ {tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
