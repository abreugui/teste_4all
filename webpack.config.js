const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin('css/main.css');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'js/bundle.js'
    },
    devServer:{
        port: 8080,
        contentBase: './public',
    },
    module: {
        loaders:[{
            test:/.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.(less|css)$/,
            use: extractLESS.extract({
                use:[
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ],
                fallback: 'style-loader',
                publicPath: '/'
            })
        }]   
    },
    plugins: [
        extractLESS
    ]
}