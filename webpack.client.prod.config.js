
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    name: 'client',
    mode: 'production',
    target: 'web',
    entry: [
        './src/client/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index-prod.html',
            template: './src/server/html/index-prod.html'
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
    },
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
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    }
};
