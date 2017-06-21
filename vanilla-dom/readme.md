<div align="center" href="">
    <img height="167" src="https://cdn.rawgit.com/iddan/stylesheet/master/assets/stylesheet.svg" alt="Stylesheet Logo" align="center" />
    <img width="167" src="https://cdn.rawgit.com/iddan/stylesheet/master/assets/dom.svg" alt="Stylesheet Logo" align="center" />
<h1>Stylesheet Vanilla DOM</h1>
<p>Dynamic CSS for the Web</p>
</div>

<h2 align="center">Usage</h2>

```bash
npm install --save stylesheet
```

Stylesheet Vanilla DOM allows you to create dynamically styled DOM elements using pure standard CSS. Wrap your dynamic CSS properties with the experminatal attr() function and Stylesheet will automatically update and render them with your data.

*stylesheet.css*
```CSS
Title {
  font-size: 4em;
  color: attr(textColor color);
}
```

#### DOM

```JSX
import { Title } from './stylesheet.css';

const title = Title.create({
  textColor: 'white'
});

title.appendChild(document.createTextNode('My dynamically styled app'));

documnet.body.appendChild(title);

title.textColor = 'blue';
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
              bindings: 'vanilla-dom'
            }
          }
        ]
      }
  // the rest of your webpack config
```
