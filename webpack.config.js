var webpack = require('webpack');
var path = require('path');

var CLIENT_DIR = path.resolve(__dirname, 'src/client');
var BUILD_DIR = path.resolve(CLIENT_DIR, 'public');
var APP_DIR = path.resolve(CLIENT_DIR, 'app');

var config = {
  context: BUILD_DIR,
  entry: {
    app: APP_DIR + '/index.jsx',
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include: [
          path.resolve(__dirname, './src'),
        ],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
    ]
  },
  devServer: {
    contentBase: CLIENT_DIR,
    publicPath: "/public/"
  },
};

module.exports = config;