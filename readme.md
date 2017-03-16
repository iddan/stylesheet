# Reactive CSS

CSS driven styled React components

```bash
npm install --save css-react-components-loader
```

Utilising [CSS attr()]() (a recent addition to CSS), [React](https://github.com/facebook/react) and [CSS Modules](https://github.com/css-modules/css-modules), `reactive-css` enables you to define dynamically styled ready to use React components using nothing but CSS stylesheets.

### Usage

*App.js*
```JSX
import React from 'react';

import { Title } from './title.css';

export default function App() {
  return <Title>Hello World, this is my first Reacive CSS component!</Title>;
}
```
*Title.css*
```CSS
.Title {
  font-size: 4em;
  color: tomato;
}
```

#### Webpack

*webpack.config.js*
```JavaScript
module.exports = {
  module: {
    loaders: [
      {
        test: /^[A-Z].+\.css$/,
        exclude: /node_modules/,
        loader: 'reactive-css/loader'
      }
    ]
  }
  // the rest of your webpack config
}
```

### Prior Art

 - CSS Modules (requires boilerplate code to connect to react)
 - React CSS Modules (binding css modules class names)
 - Styled Components (css strings in js)
 - react-css-components (using not standard css)
