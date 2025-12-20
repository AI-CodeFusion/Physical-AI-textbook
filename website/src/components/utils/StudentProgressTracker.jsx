import React, { useState, useEffect } from 'react';

/**
 * Student Progress Tracker Component
 * Tracks student progress through the Physical AI textbook
 */
const StudentProgressTracker = ({ userId, lessonId, initialStatus = 'not-started' }) => {
  const [status, setStatus] = useState(initialStatus);
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime, setStartTime] = useState(null);

  // Initialize tracking when component mounts
  useEffect(() => {
    setStartTime(new Date());
    return () => {
      // Cleanup: record time spent when component unmounts
      if (status === 'in-progress') {
        handleMarkAsComplete();
      }
    };
  }, []);

  // Track time spent on the lesson
  useEffect(() => {
    let interval = null;
    if (status === 'in-progress' && startTime) {
      interval = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = (currentTime - startTime) / 1000; // in seconds
        setTimeSpent(Math.floor(timeDiff));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [status, startTime]);

  const handleMarkAsComplete = async () => {
    try {
      // In a real implementation, this would call an API endpoint
      setStatus('completed');
      
      // Mock API call
      const progressData = {
        userId,
        lessonId,
        status: 'completed',
        timeSpent: timeSpent + Math.floor((new Date() - startTime) / 1000)
      };
      
      // In a real implementation, you would send this to your backend API
      console.log('Sending progress to server:', progressData);
      
      // Update the status
      setStatus('completed');
    } catch (error) {
      console.error('Failed to update progress:', error);
      setStatus(initialStatus); // Revert status on error
    }
  };

  const handleMarkAsInprogress = () => {
    setStatus('in-progress');
  };

  return (
    <div className="progress-tracker" style={{ 
      border: '1px solid #1a75bc', 
      borderRadius: '8px', 
      padding: '16px', 
      margin: '16px 0',
      backgroundColor: '#f8f9ff'
    }}>
      <h3 style={{ color: '#1a75bc', margin: '0 0 12px 0' }}>Your Progress</h3>
      
      <div className="progress-status" style={{ marginBottom: '12px' }}>
        <p><strong>Status:</strong> {status.replace('-', ' ')}</p>
        <p><strong>Time spent:</strong> {Math.floor(timeSpent / 60)}m {timeSpent % 60}s</p>
      </div>
      
      <div className="progress-actions">
        {status === 'not-started' && (
          <button 
            onClick={handleMarkAsInprogress}
            className="button button--secondary"
            style={{ 
              marginRight: '8px',
              padding: '6px 12px',
              backgroundColor: '#1a75bc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Start Lesson
          </button>
        )}
        
        {status === 'in-progress' && (
          <button 
            onClick={handleMarkAsComplete}
            className="button button--primary"
            style={{ 
              padding: '6px 12px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Mark as Complete
          </button>
        )}
        
        {status === 'completed' && (
          <div style={{ color: '#4CAF50', fontWeight: 'bold' }}>
            ✓ Lesson Completed!
          </div>
        )}
      </div>
      
      <div className="progress-container" style={{ marginTop: '12px' }}>
        <div className="progress-bar" style={{ 
          height: '10px', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '5px', 
          overflow: 'hidden' 
        }}>
          <div style={{ 
            height: '100%', 
            backgroundColor: status === 'completed' ? '#4CAF50' : (status === 'in-progress' ? '#1a75bc' : '#9E9E9E'),
            width: status === 'completed' ? '100%' : (status === 'in-progress' ? '50%' : '0%'),
            transition: 'width 0.4s ease'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default StudentProgressTracker;