
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    name: 'client',
    mode: 'development',
    target: 'web',
    entry: [
        "webpack-hot-middleware/client?path=//localhost:3000/__webpack_hmr&timeout=20000&reload=true",
        './src/client/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
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
                test: /\.(jpg|png|svg|gif|pdf)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
};
