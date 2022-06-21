import path from 'path';
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const typescriptRule = {
    test: /\.(ts)x?$/i,
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
};

const cssRule = {
    test: /\.scss$/,
    use: [
        {loader: "style-loader"},
        {loader: "css-loader"},
        {loader: "sass-loader"},
    ]
};

const config: Configuration = {
    mode: "development",
    output: {
        publicPath: "/",
    },
    entry: "./src/index.tsx",
    module: {
        rules: [
            typescriptRule,
            cssRule
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new HotModuleReplacementPlugin(),
    ],
    devtool: "inline-source-map",
};

export default {
    ...config,
    devServer: {
        static: path.join(__dirname, "dist"),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true,
        proxy: {
            '/api': {
                target: {
                    host: "0.0.0.0",
                    protocol: 'http:',
                    port: 5001
                },
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};