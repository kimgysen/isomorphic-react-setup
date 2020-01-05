
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const StartServerPlugin = require('start-server-webpack-plugin');


module.exports = merge(common, {
  mode: 'development',
  externals: nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  }),
  entry: [ 'webpack/hot/poll?1000', './src/server/index' ],
  output: {
    filename: 'server.js',
    publicPath: '/assets/'
  },
  plugins: [
    new StartServerPlugin({
      'name': 'server.js', nodeArgs: ['--inspect']
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "BUILD_TARGET": JSON.stringify('server')
      }
    })
  ]
});
