const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
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
                exclude: /node_modules/,
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
                },
            },
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
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
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: env === "production",
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    performance: {
        hints: false,
    },
};
