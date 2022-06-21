/* eslint-disable */
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');
const path = require('path')
require('dotenv').config({
    path: path.join(__dirname, '.env')
})

module.exports = {
    watch: true,
    target: 'web',
    mode: 'production',
    devtool: 'source-map',
    entry: path.resolve(__dirname, './index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization:{
        minimize: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './index.html', to: './' },
                { from: './styles.css', to: './' },
            ],
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        }),
    ],
    module: {
        rules: [
            {
              test: /\.html$/i,
              loader: 'html-loader',
            },
            {
                test: /(?<!\.styles).css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.styles\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.html', '.css', '']
    },
    watchOptions: {
        ignored: '**/node_modules',
    },
}