function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var invariant = _interopDefault(require('tiny-invariant'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var StepStates;

(function (StepStates) {
  StepStates["NOT_STARTED"] = "not_started";
  StepStates["CURRENT"] = "current";
  StepStates["ERROR"] = "error";
  StepStates["COMPLETED"] = "completed";
})(StepStates || (StepStates = {}));

function stepsReducer(steps, action) {
  return steps.map(function (step, i) {
    if (i < action.payload.index) {
      return _extends({}, step, {
        state: StepStates.COMPLETED
      });
    } else if (i === action.payload.index) {
      return _extends({}, step, {
        state: action.payload.state
      });
    } else {
      step.state = StepStates.NOT_STARTED;
      return step;
    }
  });
}

var useStepProgress = function useStepProgress(props) {
  var steps = props.steps,
      startingStep = props.startingStep;

  var _React$useReducer = React.useReducer(stepsReducer, steps),
      stepState = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  var _React$useState = React.useState(startingStep),
      currentIndex = _React$useState[0],
      setCurrentIndex = _React$useState[1];

  React.useEffect(function () {
    dispatch({
      type: 'init',
      payload: {
        index: currentIndex,
        state: StepStates.CURRENT
      }
    });
  }, []);

  function stepForward() {
    if (currentIndex === steps.length - 1) {
      return;
    }

    var isStateValid = true;
    var stepValidator = stepState[currentIndex].validator;

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

  function stepBackwards() {
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
    stepForward: stepForward,
    stepBackwards: stepBackwards,
    currentIndex: currentIndex,
    getProps: {
      steps: stepState,
      currentStep: currentIndex + 1
    }
  };
};

var StepProgressContext = React.createContext({});

var StepProgress = function StepProgress(_ref) {
  var children = _ref.children,
      steps = _ref.steps,
      currentStep = _ref.currentStep;
  return React__default.createElement(StepProgressContext.Provider, {
    value: {
      steps: steps,
      currentStep: currentStep
    }
  }, children);
};

var styles = {"progress-bar-wrapper":"_thGid","step-progress-bar":"_2nAfT","progress-step":"_y9pkY","step-index":"_3CEPH","step-icon":"_1umoQ","step-label":"_3tkgn","completed":"_4bt1T","spring-down":"_3d3pk","current":"_1-LPA","spring-up":"_2s0RJ","has-error":"_3cMiU","shake":"_3QhsZ","step-content":"_1Ybit"};

var StepProgressBar = function StepProgressBar(props) {
  var className = props.className,
      progressClass = props.progressClass,
      stepClass = props.stepClass;
  return React__default.createElement(StepProgressContext.Consumer, null, function (context) {
    invariant(Object.keys(context).length > 0, 'You cannot use a <StepProgressBar> outside a <StepProgess>');
    var steps = context.steps;

    if (steps === undefined) {
      return;
    }

    return React__default.createElement("div", {
      className: styles['progress-bar-wrapper'] + " " + (className || '')
    }, React__default.createElement("ul", {
      className: styles['step-progress-bar'] + " " + (progressClass || '')
    }, steps.map(function (step, i) {
      return React__default.createElement("li", {
        key: i,
        className: "" + styles['progress-step'] + (step.state === StepStates.COMPLETED ? " " + styles.completed + " completed" : '') + (step.state === StepStates.CURRENT ? " " + styles.current + " active" : '') + (step.state === StepStates.ERROR ? " " + styles['has-error'] + " error" : '') + " " + (stepClass || '')
      }, step.state === StepStates.COMPLETED && React__default.createElement("span", {
        className: styles['step-icon']
      }, React__default.createElement("svg", {
        width: "1.5rem",
        viewBox: "0 0 13 9",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, React__default.createElement("path", {
        d: "M1 3.5L4.5 7.5L12 1",
        stroke: "white",
        strokeWidth: "1.5"
      }))), step.state === StepStates.ERROR && React__default.createElement("span", {
        className: styles['step-icon']
      }, "!"), step.state !== StepStates.COMPLETED && step.state !== StepStates.ERROR && React__default.createElement("span", {
        className: styles['step-index']
      }, i + 1), React__default.createElement("span", {
        className: styles['step-label']
      }, step.label));
    })));
  });
};

var Step = function Step(_ref) {
  var step = _ref.step,
      children = _ref.children;
  return React__default.createElement(StepProgressContext.Consumer, null, function (context) {
    invariant(Object.keys(context).length > 0, 'You cannot use a <Step> outside a <StepProgess>');

    if (context.currentStep !== step) {
      return;
    }

    return children;
  });
};

exports.Step = Step;
exports.StepProgress = StepProgress;
exports.StepProgressBar = StepProgressBar;
exports.useStepProgress = useStepProgress;
//# sourceMappingURL=index.js.map
