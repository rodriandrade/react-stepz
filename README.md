<h1 align="center">
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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
</p>

## Install

```
npm install --save react-stepz
```

## Usage

> **NOTE:** I'm working towards an implementation where you don't have to import the stylesheet explicitly. I feel like that's not an ideal solution. Feel free to help me out 😁

```javascript
// import the progress bar
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';

// setup the step content
const step1Content = <h1>Step 1 Content</h1>;
const step2Content = <h1>Step 2 Content</h1>;
const step3Content = <h1>Step 3 Content</h1>;

// setup step validators, will be called before proceeding to the next step
function step2Validator() {
  // return a boolean
}

function step3Validator() {
  // return a boolean
}

// render the progress bar
<StepProgressBar
  startingStep={0}
  steps={[
    {
      label: 'Step 1',
      name: 'step 1',
      content: step1Content
    },
    {
      label: 'Step 2',
      name: 'step 2',
      content: step2Content,
      validator: step2Validator
    },
    {
      label: 'Step 3',
      name: 'step 3',
      content: step3Content,
      validator: step3Validator
    }
  ]}
/>
```

## Available Props

* startingStep (`number`) - the index of the step at which to start
* steps (`ProgressStep[]`) - array of steps with each step containing a label, name and content
* wrapperClass (`string`) - CSS class name for progress wrapper element
* progressClass (`string`) - CSS class name for progress bar element
* stepClass (`string`) - CSS class name for step indicator
* contentClass (`string`) - CSS class name for step content element
* buttonWrapperClass (`string`) - CSS class name for action buttons wrapper element
* primaryBtnClass (`string`) - CSS class name for primary themed button
* secondaryBtnClass (`string`) - CSS class name for secondary themed button

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