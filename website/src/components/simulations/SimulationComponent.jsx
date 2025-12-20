import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * Simulation Component
 * Embeds interactive simulations in Physical AI textbook lessons
 */
const SimulationComponent = ({ simulationId, title, description, height = "400px" }) => {
  return (
    <div className="simulation-container">
      <div className="simulation-title">
        {title || `Simulation: ${simulationId}`}
      </div>
      <p>{description}</p>
      
      <BrowserOnly>
        {() => {
          // This is where we'd dynamically load different types of simulations
          // For example, Three.js scenes, iframe embeds, or canvas elements
          return (
            <div style={{ 
              border: '1px solid #ff6b35', 
              height: height,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff9f5',
              borderRadius: '4px',
              position: 'relative'
            }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ margin: 0 }}><strong>Interactive Simulation</strong></p>
                <p style={{ margin: '8px 0 0 0', fontSize: '0.9em', color: '#666' }}>
                  {simulationId}
                </p>
                <p style={{ margin: '16px 0 0 0', fontStyle: 'italic', fontSize: '0.85em' }}>
                  (Simulation would be rendered here in the actual implementation)
                </p>
              </div>
            </div>
          );
        }}
      </BrowserOnly>
    </div>
  );
};

export default SimulationComponent;