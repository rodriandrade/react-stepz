/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare enum StepStates {
  NOT_STARTED = 'not_started',
  CURRENT = 'current',
  ERROR = 'error',
  COMPLETED = 'completed'
}

interface ProgressStep {
  label: string;
  state?: StepStates;
  validator?: (payload?: any) => boolean;
}

interface StepProgressProps {
  steps: ProgressStep[];
  startingStep: number;
  wrapperClass?: string;
  progressClass?: string;
  stepClass?: string;
}

interface ReducerAction {
  type: string;
  payload: { index: number; state: StepStates };
}
