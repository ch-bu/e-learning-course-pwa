const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './themes/e-learning-course/build/js/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './themes/e-learning-course/static/js'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, './themes/e-learning-course/build/js'),
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          babelrc: false,
          presets: ['es2017', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, './themes/e-learning-course/build/scss'),
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      include: /\.js$/,
      minimize: true,
      comments: false
    }),
  ]
};
