# react-props-decorators

Define `Component.propTypes` and `Component.defaultProps` by ES7 decorators.

## Installation

```
npm install react-props-decorators
```

## Usage

```js
import React from 'react';
import { propTypes, defaultProps } from 'react-props-decorators';

@propTypes({
  foo: React.PropTypes.string,
  bar: React.PropTypes.number
})
@defaultProps({
  foo: "defaultString",
  bar: 100
})
class Baz extends React.Component {
  /* ... */
}
```

## License

MIT

