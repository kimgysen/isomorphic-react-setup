
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const bourbon = require('node-bourbon').includePaths;


module.exports = {
  name: 'client',
  target: 'web',
  entry: [
    './src/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../../../public/build'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, '/'),
        exclude: /node_modules/,
        options: {
          presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
          plugins: [
            ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
            '@babel/plugin-proposal-class-properties'
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [bourbon]
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg|gif|pdf)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  }
};
