module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        use: 'babel-loader',
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
};
