const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugim = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js$|jsx)/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use:
                    ["style-loader",
                        "css-loader",
                        "sass-loader"
                    ],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),

        new miniCssExtractPlugim({
            filename: '[name].css'
        })

    ],
    devServer: {

        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3005,
        historyApiFallback: true,
    }
}