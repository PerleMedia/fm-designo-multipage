const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new MiniCssExtractPlugin
    ],
    devServer: {
        port: 3030,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|webp)$/,
                exclude: [/fonts/],
                loader: "file-loader",
                options: {
                    name: 'includes/images/[name].[ext]'
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: [/images/],
                type: 'asset/resource',
                generator: {
                    filename: 'includes/fonts/[name][ext]'
                }
            },
            {
                test: /\.xlsx$/,
                type: 'asset/resource',
                generator: {
                    filename: 'includes/data/[name][ext]'
                }
            },
        ]
    }
}