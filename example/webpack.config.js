module.exports = {
  module: {
    loaders: [
      {        
        test: /\.css/,
        loaders: [
          'css-react-components-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  entry: './src/index.js',
  output: {
    filename: 'dist/bundle.js',
  },
  devtool: 'sourcemaps',
};