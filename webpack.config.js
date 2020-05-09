const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const env = process.env.NODE_ENV || "development";

module.exports = {
    mode: env,
    entry: {
        main: "./src",
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "build"),
    },
    watch: env === "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /\/node_modules\//,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { modules: false }],
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
            {
                test: /\.svg$/,
                use: {
                    loader: "svg-url-loader",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|jpg|png|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                        name: "[name].[ext]",
                        outputPath: "fonts/",
                    },
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: "style.[chunkhash].css",
        }),
        new HTMLWebpackPlugin({
            template: "public/index.html",
            favicon: "public/favicon.ico",
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: "defer",
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        collapse_vars: false,
                    },
                },
            }),
        ],
    },
    performance: {
        hints: false,
    },
};
