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
  content: React.ReactNode;
  validator?: (payload?: any) => boolean;
}

export interface useStepProgressProps {
  steps: ProgressStep[];
  startingStep: number;
  wrapperClass?: string;
  progressClass?: string;
  stepClass?: string;
  contentClass?: string;
}

export interface StepProgressProps {
  state: ProgressStep[];
  currentIndex: number;
  wrapperClass?: string;
  progressClass?: string;
  stepClass?: string;
  contentClass?: string;
}

export interface ReducerAction {
  type: string;
  payload: { index: number; state: StepStates };
}
