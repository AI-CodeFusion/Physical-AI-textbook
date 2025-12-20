import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * Assessment Component
 * Interactive assessment component for Physical AI textbook
 */
const AssessmentComponent = ({ type, question, options, correctAnswer, explanation }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (selectedAnswer === correctAnswer) {
      setShowExplanation(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setSubmitted(false);
    setShowExplanation(false);
  };

  const getOptionLabel = (index) => {
    const labels = ['A', 'B', 'C', 'D', 'E', 'F'];
    return labels[index] || `${index + 1}`;
  };

  return (
    <div className="assessment-container">
      <div className="assessment-title">Knowledge Check</div>
      <form onSubmit={handleSubmit}>
        <p><strong>Question:</strong> {question}</p>
        
        <div className="options-container">
          {options.map((option, index) => (
            <div key={index} className="option-item" style={{ margin: '8px 0' }}>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  name="assessment"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => !submitted && setSelectedAnswer(index)}
                  disabled={submitted}
                  style={{ marginRight: '8px' }}
                />
                <span><strong>{getOptionLabel(index)}:</strong> {option}</span>
              </label>
            </div>
          ))}
        </div>
        
        {!submitted ? (
          <button 
            type="submit" 
            disabled={selectedAnswer === null}
            className="button button--primary"
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              cursor: selectedAnswer === null ? 'not-allowed' : 'pointer'
            }}
          >
            Submit Answer
          </button>
        ) : (
          <div className="assessment-result" style={{ marginTop: '16px' }}>
            {selectedAnswer === correctAnswer ? (
              <div className="correct-answer" style={{ color: 'green', fontWeight: 'bold' }}>
                ✓ Correct! Well done.
              </div>
            ) : (
              <div className="incorrect-answer" style={{ color: 'red', fontWeight: 'bold' }}>
                Incorrect. The correct answer is: <strong>{getOptionLabel(correctAnswer)}</strong>.
              </div>
            )}
            
            {showExplanation && explanation && (
              <div className="explanation" style={{ 
                marginTop: '12px', 
                padding: '12px', 
                backgroundColor: '#f0f8ff', 
                border: '1px solid #1a75bc', 
                borderRadius: '4px' 
              }}>
                <strong>Explanation:</strong> {explanation}
              </div>
            )}
            
            <button 
              type="button" 
              onClick={handleReset}
              className="button button--secondary"
              style={{
                marginTop: '12px',
                padding: '6px 12px'
              }}
            >
              Try Again
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AssessmentComponent;