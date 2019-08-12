# react-visually-hidden

React component that hides text visually but shows it for assistive technology like screen-readers

## Installation

```bash
npm install --save react-visually-hidden
```

## Usage

```javascript
import React from "react";
import VisuallyHidden from "react-visually-hidden";

const ExampleComponent = () => (
  <VisuallyHidden>
    Here is all of my content.
    <strong>I want you to know about it.</strong>
  </VisuallyHidden>
);
```

## Credit

CSS based of the great work at GDS: https://github.com/alphagov/govuk-frontend/blob/master/src/helpers/_visually-hidden.scss
