import React from 'react';
import invariant from 'tiny-invariant';
import { StepProgressContext } from '../contexts/StepProgressContext';
import styles from './styles.module.css';

import { StepProgressBarProps, StepStates } from '../models';

export const StepProgressBar = (props: StepProgressBarProps): JSX.Element => {
  const { wrapperClass, progressClass, stepClass } = props;

  return (
    <StepProgressContext.Consumer>
      {(context) => {
        invariant(Object.keys(context).length > 0, 'You cannot use a <StepProgressBar> outside a <StepProgess>');

        const { steps } = context;

        if (steps === undefined) {
          return;
        }

        return (
          <div className={`${styles['progress-bar-wrapper']} ${wrapperClass || ''}`}>
            <ul className={`${styles['step-progress-bar']} ${progressClass || ''}`}>
              {steps.map(function (step, i) {
                return (
                  <li
                    key={i}
                    className={`${styles['progress-step']}${
                      step.state === StepStates.COMPLETED ? ` ${styles.completed}` : ''
                    }${step.state === StepStates.CURRENT ? ` ${styles.current}` : ''}${
                      step.state === StepStates.ERROR ? ` ${styles['has-error']}` : ''
                    } ${stepClass || ''}`}
                  >
                    {step.state === StepStates.COMPLETED && (
                      <span className={styles['step-icon']}>
                        <svg
                          width="1.5rem"
                          viewBox="0 0 13 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1 3.5L4.5 7.5L12 1" stroke="white" strokeWidth="1.5" />
                        </svg>
                      </span>
                    )}
                    {step.state === StepStates.ERROR && (
                      <span className={styles['step-icon']}>!</span>
                    )}
                    {step.state !== StepStates.COMPLETED && step.state !== StepStates.ERROR && (
                      <span className={styles['step-index']}>{i + 1}</span>
                    )}
                    <span className={styles['step-label']}>{step.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }}
    </StepProgressContext.Consumer>
  );
};
