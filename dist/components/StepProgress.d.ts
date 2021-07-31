import React from 'react';
import { StepProgressContextProps, UseStepProgressOptions } from '../models';
export declare const StepProgressContext: React.Context<StepProgressContextProps>;
export declare const StepProgress: React.FC;
export declare const withStepProgress: (Component: React.FC<{}>) => () => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export declare const useStepProgress: ({ steps, startingStep }: UseStepProgressOptions) => {
    stepForward: () => void;
    stepBackwards: () => void;
    currentStep: number;
};
