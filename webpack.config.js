const path = require('path');

module.exports = {
  entry: {
    main: './src/main'
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'app'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader'}
    ]
  }
};
