<div align="center" href="">
    <img width="200" src="https://raw.githubusercontent.com/500tech/stylesheet/master/assets/stylesheet.svg" alt="Stylesheet Logo" align="center" />
<h1>Stylesheet</h1>
<p>Dynamic CSS for user interfaces.</p>
</div>

```bash
npm install --save stylesheet
```

 - **Pure:** Stylesheet uses pure standard CSS. Wrap your dynamic CSS properties with the experminatal attr() function and Stylesheet will automatically update and render them with your data. Stylesheet does not require support for attr() to work and does not interrupt static CSS rendering, so you can develop new features in Stylesheet without rewriting existing code.
 
 - **Component-Based:** Build reusable, customizable and dynamic front-end UI elements. Since component style is written in CSS instead of JavaScript, you can easily define components's complex relationships and interactions and share style as efficiently as with normal CSS.
 
 - **Write Once, Use Anywhere:** Stylesheet can potentially work with any front-end technology stack, so you can share and transfer your styled components between platforms.

<h2 align="center">Usage</h2>

*stylesheet.css*
```CSS
.Title {
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
          {
            loader: 'stylesheet/loader'
            query: {
              bindings: 'react'
            }
          },
          {
            loader: 'css-loader',
            query: {
              modules: true
            }
          }
        ]
      }
  // the rest of your webpack config
```

### Prior Art and Comparison

#### CSS Modules
A methodology to import CSS tokens (e.g. class names) to JavaScript and converting them to unique identifiers.

 - Requires boilreplate code to use as components.
 - Does not provide a solution for dynamic CSS.

#### Styled Components 
A library for composing components from tagged template literals of CSS code.

 - Does not use standard CSS for dynamic properties.
 - Does not use external CSS.
 - Compiles at runtime
 - Requires 70KB of *minified* code for full usage
