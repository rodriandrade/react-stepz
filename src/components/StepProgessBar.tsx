import React from 'react';
import invariant from 'tiny-invariant';
import { StepProgressContext } from './StepProgress';
import styles from './styles.module.css';

import { StepProgressBarProps } from '../models';

export const StepProgressBar = (props: StepProgressBarProps): JSX.Element => {
  const { className, progressClass, stepClass, steps } = props;

  return (
    <StepProgressContext.Consumer>
      {(context) => {
        invariant(
          Object.keys(context).length > 0,
          'You cannot use a <StepProgressBar> outside a <StepProgess>'
        );

        const { currentStep, isError } = context;

        return (
          <div className={`${styles['progress-bar-wrapper']} ${className || ''}`}>
            <ul className={`${styles['step-progress-bar']} ${progressClass || ''}`}>
              {steps.map(function (step, i) {
                return (
                  <li
                    key={i}
                    className={`${styles['progress-step']}${
                      currentStep > i ? ` ${styles.completed} completed` : ''
                    }${i === currentStep ? ` ${styles.current} active` : ''}${
                      i === currentStep && isError ? ` ${styles['has-error']} error` : ''
                    } ${stepClass || ''}`}
                  >
                    {currentStep > i && (
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
                    {i === currentStep && isError && <span className={styles['step-icon']}>!</span>}
                    {currentStep <= i && (!isError || i !== currentStep) && (
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
