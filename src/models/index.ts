export enum StepStates {
  NOT_STARTED = 'not_started',
  CURRENT = 'current',
  ERROR = 'error',
  COMPLETED = 'completed'
}

export interface ProgressStep {
  label: string;
  name: string;
  state?: StepStates;
  validator?: (payload?: any) => boolean;
}

export interface StepProgessContextProps {
  steps?: ProgressStep[];
  currentStep?: number;
}

export interface UseStepProgressOptions {
  steps: ProgressStep[];
  startingStep: number;
  wrapperClass?: string;
  progressClass?: string;
  stepClass?: string;
  contentClass?: string;
}

export interface UseStepProgressReturn {
  stepForward(): void;
  stepBackwards(): void;
  currentIndex: number;
  getProps: StepProgressProps;
}

export interface StepProgressProps {
  steps: ProgressStep[];
  currentStep: number;
}

export interface StepProgressBarProps {
  wrapperClass?: string;
  progressClass?: string;
  stepClass?: string;
  contentClass?: string;
}

export interface StepProps {
  step: number;
}

export interface ReducerAction {
  type: string;
  payload: { index: number; state: StepStates };
}
