// Flashcard.js
import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
      <div className="front">
        <p>{isFlipped ? question : answer}</p>
      </div>
      <div className="back">
        <p>{question}</p>
      </div>
    </div>
  );
};

export default Flashcard;
