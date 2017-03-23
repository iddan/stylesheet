<a href="">
    <img src="assets/stylesheet.png" alt="Stylesheet Logo" align="right" />
</a>

# Stylesheet

Dynamic CSS for user interfaces.

 - **Pure:** Stylesheet uses pure standard CSS. Wrap your dynamic CSS properties with the experminatal attr() function and Stylesheet will automatically update and render them with your data. Stylesheet does not require support for attr() to work and does not interrupt static CSS rendering, so you can develop new features in Stylesheet without rewriting existing code.
 
 - **Component-Based:** Build reusable, customizable and dynamic front-end UI elements. Since component style is written in CSS instead of JavaScript, you can easily define components's complex relationships and interactions and share style as efficiently as with normal CSS.
 
 - **Write Once, Use Anywhere:** Stylesheet can potentially work with any front-end technology stack, so you can share and transfer your styled components between platforms.

```bash
npm install --save stylesheet
```

### Usage

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
A methodology to import CSS tokens (class names and animation names) to JavaScript and converting them unique identifiers. Used in this project to convert components class names.

 - Requires boilreplate code to use with React as components.
 - Do not provides a solution for dynamic CSS.

#### React CSS Modules
Binding for CSS Modules and React that allows style class names annoation in a seperate prop on components.

 - Requires boilreplate code to use with React as components.
 - Do not provides a solution for dynamic CSS.

<!--#### Styled Components 
A React library which generates 

css strings in js

#### react-css-components
using not standard css-->
