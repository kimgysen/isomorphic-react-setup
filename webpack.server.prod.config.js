
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    name: 'server',
    mode: 'production',
    target: 'node',
    externals: nodeExternals(),
    entry: './src/server/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.[hash].js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src/'),
                exclude: /node_modules/,
                options: {
                    presets:
                        [['@babel/preset-env', { modules: 'false' }], '@babel/preset-react'],
                    plugins: [
                        ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            },
            {
                test: /\.scss$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.css$/,
                loader: 'ignore-loader'
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