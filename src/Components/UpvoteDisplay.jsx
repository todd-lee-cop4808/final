import React from 'react';
import '../styles/UpvoteDisplay.css';

const UpvoteDisplay = ({ count = 0, onClick }) => {
  return (
    <div className="card-votes">
      {onClick ? (
        <button className="upvote-btn" onClick={onClick} aria-label="Upvote">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      ) : (
        <div className="upvote-icon-static">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      )}
      <span>{count} upvotes</span>
    </div>
  );
};

export default UpvoteDisplay;