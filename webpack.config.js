const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {index: './themes/e-learning-course/build/js/index.jsx',
          style: './themes/e-learning-course/build/scss/main.scss',
          vendor: ["react", "react-dom"]},
  output: {
    filename: '[name].bundle.js',
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
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
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
    new ExtractTextPlugin({ // define where to save the file
      filename: '../css/[name].bundle.css',
      allChunks: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    })
  ]
};
