const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config.base');

const { module: { rules = [] }, plugins = [] } = config;

module.exports = Object.assign(config, {
  module: Object.assign(config.module, {
    rules: [
      ...rules,
      {
        test: /\.css$/,
        use: [
          {
            loader: 'stylesheet/loader',
            query: {
              bindings: 'react-dom',
            },
          },
          ...ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader'],
          }),
        ],
      },
    ],
  }),
  plugins: [...plugins, new ExtractTextPlugin('dist/bundle.css')],
});
