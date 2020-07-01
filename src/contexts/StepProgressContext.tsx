import React, { createContext } from 'react';
import { StepProgressContextProps } from '../models';

export const StepProgressContext: React.Context<StepProgressContextProps> = createContext<
  StepProgressContextProps
>({});
