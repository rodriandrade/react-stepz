import React from 'react';
import invariant from 'tiny-invariant';
import { StepProps } from '../models';
import { StepProgressContext } from './StepProgress';

export const Step: React.FC<StepProps> = ({ step, children }): React.ReactElement => (
  <StepProgressContext.Consumer>
    {(context) => {
      invariant(Object.keys(context).length > 0, 'You cannot use a <Step> outside a <StepProgess>');

      if (context.currentStep !== step) {
        return;
      }

      return children;
    }}
  </StepProgressContext.Consumer>
);
