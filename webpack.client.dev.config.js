
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    name: 'client',
    mode: 'development',
    target: 'web',
    entry: [
        './src/client/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index-dev.html',
            template: './src/server/html/index-dev.html'
        })
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
