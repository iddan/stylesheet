const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'stylesheet/loader',
            query: {
              sourceMap: true,
              bindings: 'react-dom',
            },
          },
        ],
      },
    ],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  entry: './src/index.js',
  output: {
    filename: 'dist/bundle.js',
  },
  devtool: 'sourcemaps',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8080,
    historyApiFallback: true,
    inline: true,
  },
};
