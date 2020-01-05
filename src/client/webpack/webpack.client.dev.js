
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index-dev.html',
      template: './src/common/html/index-dev.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style-dev.css',
    })
  ]
});
