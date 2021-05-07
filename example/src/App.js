import React, { useState } from 'react';

import { useStepProgress, withStepProgress, StepProgressBar, Step } from 'react-stepz';
import 'react-stepz/dist/index.css';

import './index.css';
import './App.css';

const step1Content = <h1>Step 1</h1>;
const step2Content = <h1>Step 2</h1>;
const step3Content = <h1>Step 3</h1>;
const step4Content = <h1>Step 4</h1>;

function step3Validator() {
  return false;
}

function App() {
  const [isValid, setIsValid] = useState(false);

  const steps = [
    {
      label: 'Step 1',
      name: 'step 1'
    },
    {
      label: 'Step 2',
      name: 'step 2',
      validator: () => isValid
    },
    {
      label: 'Step 3',
      name: 'step 3',
      validator: step3Validator
    },
    {
      label: 'Step 4',
      name: 'step 4'
    }
  ];

  const { stepForward, stepBackwards, currentIndex } = useStepProgress({
    steps,
    startingStep: 0
  });

  return (
    <div className="app">
      <StepProgressBar steps={steps} />
      <Step step={0}>
        <h1>Hello there</h1>
      </Step>
      <Step step={1}>
        <h1>Next part</h1>
        <span>Is valid: {isValid ? 'yes' : 'no'}</span>
        <button onClick={() => setIsValid(true)}>Validate</button>
      </Step>
      <Step step={2}>
        <h1>Almost there</h1>
      </Step>
      <Step step={3}>
        <h1>Last step</h1>
      </Step>
      <div className="step-buttons">
        <a
          className={`
            step-action-btn
            action-btn-secondary
            ${currentIndex === 0 && 'disabled'}
          `}
          onClick={() => stepBackwards()}
        >
          Previous
        </a>
        <a
          className={`
            step-action-btn
            action-btn-primary
            ${currentIndex === steps.length - 1 && 'disabled'}
          `}
          onClick={() => stepForward()}
        >
          Next
        </a>
      </div>
    </div>
  );
}

export default withStepProgress(App);
