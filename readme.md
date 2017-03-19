# stylesheet

The next generation of CSS

```bash
npm install --save stylesheet
```

### Usage

#### React

*App.js*
```JSX
import React from 'react';
import { Title } from './Title.css';

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
        query: {
          bindings: 'react'
        }
      }
    ]
  }
  // the rest of your webpack config
}
```

### Prior Art and Comparison

#### CSS Modules
A methodology to import CSS tokens (class names and animation names) to JavaScript and converting them unique identifiers. Used in this project to convert components class names.

 - Requires boilreplate code to use with React as components.
 - Do not provides a solution for dynamic CSS.

#### React CSS Modules
Binding for CSS Modules and React that allows style class names annoation in a seperate prop on components.

 - Requires boilreplate code to use with React as components.
 - Do not provides a solution for dynamic CSS.

#### Styled Components 
A React library which generates 

css strings in js

#### react-css-components
using not standard css
