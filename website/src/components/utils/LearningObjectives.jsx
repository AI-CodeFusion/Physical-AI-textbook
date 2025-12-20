import React from 'react';

/**
 * Learning Objectives Component
 * Displays learning objectives for each lesson
 */
const LearningObjectives = ({ objectives }) => {
  if (!objectives || objectives.length === 0) {
    return null;
  }

  return (
    <div className="objectives-container" style={{
      border: '2px solid #1a75bc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px 0',
      backgroundColor: '#f8f9ff',
      color: '#333'
    }}>
      <h3 style={{ 
        color: '#1a75bc', 
        margin: '0 0 12px 0',
        display: 'flex',
        alignItems: 'center'
      }}>
        <span style={{ marginRight: '8px' }}>🎯</span>
        Learning Objectives
      </h3>
      <ul style={{
        margin: 0,
        paddingLeft: '20px',
        color: '#333'
      }}>
        {objectives.map((objective, index) => (
          <li
            key={index}
            style={{
              marginBottom: '8px',
              lineHeight: '1.5',
              color: '#333'
            }}
          >
            {objective}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningObjectives;