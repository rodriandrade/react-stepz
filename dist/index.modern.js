import React, { createContext, useState, useEffect } from 'react';
import invariant from 'tiny-invariant';

var StepProgressContext = createContext({});
var StepProgress = function StepProgress(_ref) {
  var children = _ref.children;

  var _useState = useState(false),
      isError = _useState[0],
      setIsError = _useState[1];

  var _useState2 = useState(0),
      currentStep = _useState2[0],
      setCurrentStep = _useState2[1];

  return React.createElement(StepProgressContext.Provider, {
    value: {
      isError: isError,
      setIsError: setIsError,
      currentStep: currentStep,
      setCurrentStep: setCurrentStep
    }
  }, children);
};
var withStepProgress = function withStepProgress(Component) {
  return function () {
    return React.createElement(StepProgress, null, React.createElement(Component, null));
  };
};
var useStepProgress = function useStepProgress(_ref2) {
  var steps = _ref2.steps,
      startingStep = _ref2.startingStep;
  var context = React.useContext(StepProgressContext);

  if (context === undefined) {
    throw new Error('useStepProgress must be used within a StepProgress');
  }

  var setCurrentStep = context.setCurrentStep,
      currentStep = context.currentStep,
      setIsError = context.setIsError;
  useEffect(function () {
    setCurrentStep(startingStep || 0);
  }, [startingStep]);

  var stepForward = function stepForward() {
    if (currentStep === steps.length - 1) return;
    var stepValidator = steps[currentStep].validator;

    if (stepValidator && !stepValidator()) {
      setIsError(true);
    } else {
      setCurrentStep(function (old) {
        return old + 1;
      });
      setIsError(false);
    }
  };

  var stepBackwards = function stepBackwards() {
    if (currentStep === 0) return;
    setCurrentStep(function (old) {
      return old - 1;
    });
    setIsError(false);
  };

  return {
    stepForward: stepForward,
    stepBackwards: stepBackwards,
    currentStep: currentStep
  };
};

var styles = {"progress-bar-wrapper":"_thGid","step-progress-bar":"_2nAfT","progress-step":"_y9pkY","step-index":"_3CEPH","step-icon":"_1umoQ","step-label":"_3tkgn","completed":"_4bt1T","spring-down":"_3d3pk","current":"_1-LPA","spring-up":"_2s0RJ","has-error":"_3cMiU","shake":"_3QhsZ","step-content":"_1Ybit"};

var StepProgressBar = function StepProgressBar(props) {
  var className = props.className,
      progressClass = props.progressClass,
      stepClass = props.stepClass,
      steps = props.steps;
  return React.createElement(StepProgressContext.Consumer, null, function (context) {
    invariant(Object.keys(context).length > 0, 'You cannot use a <StepProgressBar> outside a <StepProgess>');
    var currentStep = context.currentStep,
        isError = context.isError;
    return React.createElement("div", {
      className: styles['progress-bar-wrapper'] + " " + (className || '')
    }, React.createElement("ul", {
      className: styles['step-progress-bar'] + " " + (progressClass || '')
    }, steps.map(function (step, i) {
      return React.createElement("li", {
        key: i,
        className: "" + styles['progress-step'] + (currentStep > i ? " " + styles.completed + " completed" : '') + (i === currentStep ? " " + styles.current + " active" : '') + (i === currentStep && isError ? " " + styles['has-error'] + " error" : '') + " " + (stepClass || '')
      }, currentStep > i && React.createElement("span", {
        className: styles['step-icon']
      }, React.createElement("svg", {
        width: "1.5rem",
        viewBox: "0 0 13 9",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        d: "M1 3.5L4.5 7.5L12 1",
        stroke: "white",
        strokeWidth: "1.5"
      }))), i === currentStep && isError && React.createElement("span", {
        className: styles['step-icon']
      }, "!"), currentStep <= i && (!isError || i !== currentStep) && React.createElement("span", {
        className: styles['step-index']
      }, i + 1), React.createElement("span", {
        className: styles['step-label']
      }, step.label));
    })));
  });
};

var Step = function Step(_ref) {
  var step = _ref.step,
      children = _ref.children;
  return React.createElement(StepProgressContext.Consumer, null, function (context) {
    invariant(Object.keys(context).length > 0, 'You cannot use a <Step> outside a <StepProgess>');

    if (context.currentStep !== step) {
      return;
    }

    return children;
  });
};

export { Step, StepProgress, StepProgressBar, useStepProgress, withStepProgress };
//# sourceMappingURL=index.modern.js.map
