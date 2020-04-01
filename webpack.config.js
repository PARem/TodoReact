const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    module: {
        rules: [
            // Loading js
            {
                test: /(\.js)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            // Loading css
            { test: /(\.css)$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
            // Loading sass/scss
            { test: /(\.s[ac]ss)$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: 'main-[hash:8].css'
        })
    ]
};