import * as React from 'react';

import { UseStepProgressOptions, UseStepProgressReturn, StepStates } from '../models';

function stepsReducer(steps: ProgressStep[], action: ReducerAction): ProgressStep[] {
  return steps.map(function (step, i) {
    if (i < action.payload.index) {
      return { ...step, state: StepStates.COMPLETED };
    } else if (i === action.payload.index) {
      return { ...step, state: action.payload.state };
    } else {
      step.state = StepStates.NOT_STARTED;
      return step;
    }
  });
}

export const useStepProgress = (props: UseStepProgressOptions): UseStepProgressReturn => {
  const { steps, startingStep } = props;

  const [stepState, dispatch] = React.useReducer(stepsReducer, steps);
  const [currentIndex, setCurrentIndex] = React.useState(startingStep);

  React.useEffect(function () {
    dispatch({
      type: 'init',
      payload: { index: currentIndex, state: StepStates.CURRENT }
    });
  }, []);

  function stepForward(): void {
    if (currentIndex === steps.length - 1) {
      return;
    }

    let isStateValid = true;
    const stepValidator = stepState[currentIndex].validator;

    if (stepValidator) {
      isStateValid = stepValidator();
    }
    dispatch({
      type: 'next',
      payload: {
        index: isStateValid ? currentIndex + 1 : currentIndex,
        state: isStateValid ? StepStates.CURRENT : StepStates.ERROR
      }
    });

    if (isStateValid) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function stepBackwards(): void {
    if (currentIndex === 0) {
      return;
    }

    dispatch({
      type: 'previous',
      payload: {
        index: currentIndex - 1,
        state: StepStates.CURRENT
      }
    });
    setCurrentIndex(currentIndex - 1);
  }

  return {
    stepForward,
    stepBackwards,
    currentIndex,
    getProps: {
      steps: stepState,
      currentStep: currentIndex + 1
    }
  };
};
