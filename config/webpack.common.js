const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets":[
                            "env",
                            "react"
                        ]
                    }
                }
            }
        ]
    },
    resolve : {
        extensions  : ['.js','.jsx','.html','.css','.scss'],
        modules : [path.resolve(__dirname, './'), 'node_modules'],
        alias : {
            Containers  : path.resolve(__dirname, '../src/containers/')
        }
    }
};
