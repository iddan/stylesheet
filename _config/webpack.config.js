const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets': [
              'env',
              'stage-2',
              'react',
            ],
          },
        }
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    fs: '{}',
    module: '{}',
  },
  entry: {
    'code-example': './_javascript/code-example',
  },
  output: {
    path: path.resolve(__dirname, '../javascript'),
    filename: '[name].js',
  },
};
