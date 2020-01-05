
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index-prod.html',
      template: 'src/common/html/index-prod.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const nodeModule = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);

            let packageName;
            if (nodeModule) {
              packageName = nodeModule[1];
            } else {
              // This is a bug, check where this comes from later.
              packageName = 'somefilename';
            }

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  }
});
