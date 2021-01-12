const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    context: path.resolve(__dirname, 'src'),

    entry: {
        main: './index.js',
    },

    devtool: 'source-map',

    optimization: {
        splitChunks: {
            chunks: "all",
        }
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        // PAGES
        new HTMLWebpackPlugin(
            {
                filename: "ui-kit.html",
                template: "./ui-kit.html"
            },
        ),
        new HTMLWebpackPlugin(
            {
                filename: "index.html",
                template: "./index.html"
            },
        ),
        new HTMLWebpackPlugin(
            {
                filename: "search-room.html",
                template: "./search-room.html"
            },
        ),
        new HTMLWebpackPlugin(
            {
                filename: "room-details.html",
                template: "./room-details.html"
            },
        ),
        new HTMLWebpackPlugin(
            {
                filename: "sign-in.html",
                template: "./sign-in.html"
            },
        ),
        new HTMLWebpackPlugin(
            {
                filename: "registration.html",
                template: "./registration.html"
            },
        ),


        new CleanWebpackPlugin(),

        new CopyPlugin({
            patterns: [
                {from: "./assets/img", to: "assets/img"},
            ],
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),

    ],

    module: {
        rules: [
            // Loading SCSS
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        }
                    },
                    // 'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },

            // Loading Images
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        // loader: 'file-loader',
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },

            // Loading Fonts
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts'
                }
            },

            // Loading jQuery
            {
                test: require.resolve('jquery'), // Без него не работал jQuery
                loader: 'expose-loader',
                options: {
                    exposes: ['$', 'jQuery'],
                },
            },
        ],
    },

    devServer: {
        port: 4200,
        open: true,
    }
}