const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const env = process.env.NODE_ENV || "development";

module.exports = {
    entry: {
        es: "./src",
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
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
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
                use: [
                    "svg-url-loader",
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|jpg|gif)$/,
                use: {
                    loader: "url-loader?limit=100000",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/",
                    },
                },
            },
        ],
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
};
