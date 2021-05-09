<h1 align="center">
  React-Stepz
</h1>

<h4 align="center">Hook based multi-step progress bar for React</h4>

<p align="center">
  <img alt="React Stepz Demo" src="react-step-progress-demo.gif" width="60%" />
</p>

<p align="center">

<a href="https://www.npmjs.com/package/react-stepz">
  <img src="https://badge.fury.io/js/react-stepz.svg" alt="npm version" height="18">
</a>

<a title='License' href="https://github.com/r-bt/react-stepz/blob/master/LICENSE">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' />
 </a>
 
 <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a title="Contributors" href="#contributors">
  <img src="https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square">
  </a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
 
</p>

## Install

```
npm install --save react-stepz
```

## Usage

`react-stepz` uses React Contexts to share the current step between components. You can wrap your component with a context provider directly

```javascript
import { StepProgress } from 'react-stepz`;

...
return (
  <StepProgress>
    <MyComponent>
  </StepProgress>
)
```

or use our `HOC` to wrap your component

```javascript
import { withStepProgress } from 'react-stepz';

export default withStepProgress(MyComponent);
```

Then you can create your steps and validation functions

```javascript
// MyComponent.jsx
import { withStepProgress, useStepProgress, Step, StepProgressBar}
import { useState } from 'React';

const MyComponent = () => {
  const [isValid, setIsValid] = useState(false);

  const steps = [
    {
      label: 'Step 1',
      name: 'step 1'
    },
    {
      label: 'Step 2',
      name: 'step 2',
      validator: () => isValid
    },
    {
      label: 'Step 3',
      name: 'step 3',
      validator: step3Validator
    },
    {
      label: 'Step 4',
      name: 'step 4'
    }
  ];

  const { stepForward, stepBackwards, currentIndex } = useStepProgress({
    steps,
    startingStep: 0
  });

  return (
    <div>
      <StepProgressBar steps={steps} />
      <Step step={0}>
        <h1>First step</h1>
      </Step>
      <Step step={1}>
        <h1>Second step</h1>
      </Step>
      <Step step={2}>
        <h1>Third Step</h1>
      </Step>
    </div>
  )
}

export default withStepProgress(MyComponent);
```

## Available Props

- class (`string`) - CSS class name for the ProgressBarWrapper
- progressClass (`string`) - CSS class name for ProgressBar
- stepClass (`string`) - CSS class name for ProgressBar step

## Show your support

Give a ⭐️ if this project helped you!

## CONTRIBUTING & CODE OF CONDUCT

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://r-bt.com"><img src="https://avatars.githubusercontent.com/u/2939329?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Richard Beattie</b></sub></a><br /><a href="https://github.com/r-bt/react-stepz/commits?author=r-bt" title="Code">💻</a> <a href="#ideas-r-bt" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/saini-g"><img src="https://avatars.githubusercontent.com/u/50542972?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gaurav Saini</b></sub></a><br /><a href="https://github.com/r-bt/react-stepz/commits?author=saini-g" title="Code">💻</a> <a href="#ideas-saini-g" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/r-bt/react-stepz/commits?author=saini-g" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
