module.exports = {
  module: {
    rules: [
      {        
        test: /\.css/,
        use: [
          {
            loader: 'stylesheet/loader',
            query: {
              bindings: 'react-dom',
            },
          },
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
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  entry: './src/index.js',
  output: {
    filename: 'dist/bundle.js',
  },
  devtool: 'sourcemaps',
};