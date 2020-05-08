const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const env = process.env.NODE_ENV || "development";

module.exports = {
    entry: {
        main: "./src",
    },
    output: {
        filename: "main.js",
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
                    "style-loader",
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
        new BundleAnalyzerPlugin(),
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
};
