const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    // Where files should be sent once they are bundled
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
        filename: 'bundle.js'
    },
    optimization: {
        minimizer: [new TerserPlugin({ /* additional options here */ })],
    },
    devServer: {
        port: 3000,
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './public/ajaib.ico'
        }),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}