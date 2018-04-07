require('babel-polyfill');
const path                  = require('path');
const CleanWebpackPlugin    = require('clean-webpack-plugin');
const ExtractTextPlugin     = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: ['babel-polyfill', './index.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename: "[local].css",
            disable: process.env.NODE_ENV !== "production",
            allChunks: true,
        })
    ],
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets":[
                            "env",
                            "react",
                            "stage-0"
                        ]
                    }
                }
            },
            {
                test: /(\.css|\.scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap       : true,
                            modules         : true,
                            importLoaders   : true,
                            localIdentName : "[local]"
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            localIdentName : "[local]"
                        }
                    }
                    ]
                })
            }
        ]
    },
    resolve : {
        extensions  : ['.js','.jsx','.html','.css','.scss'],
        modules : [path.resolve(__dirname, './'), 'node_modules'],
        alias : {
            Containers  : path.resolve(__dirname, '../src/containers/'),
            Styles      : path.resolve(__dirname, '../public/css/')
        }
    }
};
