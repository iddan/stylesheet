<div align="center" href="">
    <img height="167" src="https://cdn.rawgit.com/iddan/stylesheet/master/assets/stylesheet.svg" alt="Stylesheet Logo" align="center" />
    <img width="167" src="https://cdn.rawgit.com/iddan/stylesheet/master/assets/webpack.svg" alt="Stylesheet Logo" align="center" />
<h1>Stylesheet Loader</h1>
<p><a href="https://webpack.js.org">Webpack</a> loader for <a href="https://github.com/iddan/stylesheet">Stylesheet</a></p>
</div>

<h2 align="center">Usage</h2>

```bash
npm install --save stylesheet
```

Stylesheet uses Webpack to go through your CSS modules and export the components. The loader extends Webpack's [CSS Loader] so you benefit the community standard for parsing CSS while getting extra functionality.

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
              bindings: BINDINGS
            }
          }
        ]
      }
  // the rest of your webpack config
```
[CSS Loader]: (https://github.com/webpack-contrib/css-loader)
