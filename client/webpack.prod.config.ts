import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config: Configuration = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        publicPath: "",
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},  // to inject the result into the DOM as a style block
                    {loader: "css-loader", options: {modules: false}},  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
                    {loader: "sass-loader"},  // to convert SASS to CSS
                    // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
                ]
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new CleanWebpackPlugin(),
    ],
};

export default config;