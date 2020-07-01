import React from 'react';

import { useStepProgress, StepProgress, StepProgressBar, Step } from 'react-step-progress';
import 'react-step-progress/dist/index.css';

import './index.css';
import './App.css';

const step1Content = <h1>Step 1</h1>;
const step2Content = <h1>Step 2</h1>;
const step3Content = <h1>Step 3</h1>;
const step4Content = <h1>Step 4</h1>;

function step2Validator() {
  return true;
}

function step3Validator() {
  return false;
}

function App() {

  const steps = [
    {
      label: 'Step 1',
      name: 'step 1',
    },
    {
      label: 'Step 2',
      name: 'step 2',
      validator: step2Validator
    },
    {
      label: 'Step 3',
      name: 'step 3',
      validator: step3Validator,
    },
    {
      label: 'Step 4',
      name: 'step 4',
    }
  ];

  const { stepForward, stepBackwards, getProps, currentIndex } = useStepProgress({
    steps,
    startingStep: 0,
  });

  return (
    <div className="app">
      <StepProgress {...getProps} >
        <StepProgressBar />
        <Step step={1}>
          <h1>Hello there</h1>
        </Step>
        <Step step={2}>
          <h1>Next part</h1>
        </Step>
        <Step step={3}>
          <h1>Almost there</h1>
        </Step>
        <Step step={4}>
          <h1>Last step</h1>
        </Step>
      </StepProgress>
      <div className="step-buttons">
        <a
          className={`
            step-action-btn
            action-btn-secondary
            ${currentIndex === 0 && 'disabled'}
          `}
          onClick={() => stepBackwards()}>
          Previous
        </a>
        <a
          className={`
            step-action-btn
            action-btn-primary
            ${currentIndex === steps.length - 1 && 'disabled'}
          `}
          onClick={() => stepForward()}>
          Next
        </a>
      </div>
    </div>
  );
}

export default App;
