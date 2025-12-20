import React from 'react';
import clsx from 'clsx';
import styles from './Exercise.module.css';

const Exercise = ({title, description, solution}) => {
  const [showSolution, setShowSolution] = React.useState(false);

  return (
    <div className={clsx('alert alert--secondary', styles.exerciseContainer)}>
      <div className={styles.exerciseHeader}>
        <h3 className={styles.exerciseTitle}>{title}</h3>
      </div>
      <div className={styles.exerciseBody}>
        <p>{description}</p>
        <div className={styles.exerciseActions}>
          <button 
            className={clsx('button button--secondary button--sm', styles.solutionButton)} 
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </button>
        </div>
        {showSolution && (
          <div className={clsx('alert alert--info', styles.solutionContainer)}>
            <h4>Solution:</h4>
            <pre className={styles.solutionText}>{solution}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;