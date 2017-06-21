<div align="center" href="">
    <img height="167" src="https://cdn.rawgit.com/iddan/stylesheet/master/assets/stylesheet.svg" alt="Stylesheet Logo" align="center" />
    <img width="167" src="https://cdn.rawgit.com/iddan/stylesheet/master/assets/react.svg" alt="React Logo" align="center" />
<h1>Stylesheet ReactDOM</h1>
<p>Dynamic CSS for React on the Web</p>
</div>

<h2 align="center">Usage</h2>

```bash
npm install --save stylesheet
```

Stylesheet ReactDOM allows you to create dynamically styled React components using pure standard CSS. Wrap your dynamic CSS properties with the experminatal attr() function and Stylesheet will automatically update and render them with your data.

*stylesheet.css*
```CSS
Title {
  font-size: 4em;
  color: attr(textColor color);
}
```

#### React (Web)

```JSX
import React, { Component } from 'react';
import { Title } from './stylesheet.css';

class Header extends Component {
  render() {
    return <Title textColor={this.props.textColor}>My dynamically styled app</Title>;
  }
}
```

#### Webpack

```JavaScript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'stylesheet/loader'
            query: {
              bindings: 'react-dom'
            }
          }
        ]
      }
  // the rest of your webpack config
```

<h2 align="center">Prior Art and Comparison</h2>

#### Styled Components 
A library for composing components from tagged template literals of CSS code.

 - Does not use standard CSS for dynamic properties.
 - Does not use external CSS.
 - Compiles at runtime
 - Requires 70KB of *minified* code for full usage
