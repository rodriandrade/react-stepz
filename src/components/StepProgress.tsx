import React from 'react';
import { StepProgressProps } from '../models';
import { StepProgressContext } from '../contexts/StepProgressContext';

export const StepProgress: React.FC<StepProgressProps> = ({
  children,
  steps,
  currentStep
}): React.ReactElement => (
  <StepProgressContext.Provider
    value={{
      steps,
      currentStep
    }}
  >
    {children}
  </StepProgressContext.Provider>
);
