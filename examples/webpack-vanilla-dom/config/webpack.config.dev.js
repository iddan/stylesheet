const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.base');

const { module: { rules = [] }, plugins = [] } = config;

module.exports = Object.assign(config, {
  module: Object.assign(config.module, {
    rules: [
      ...rules,
      {
        test: /\.css/,
        use: [
          {
            loader: 'stylesheet/loader',
            query: {
              sourceMap: true,
              bindings: 'vanilla-dom',
            },
          },
          'style-loader',
          'css-loader',
        ],
      },
    ],
  }),
  devtool: 'sourcemaps',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    port: 8080,
    hotOnly: true,
    historyApiFallback: true,
    inline: true,
  },
  plugins: [
    ...plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
