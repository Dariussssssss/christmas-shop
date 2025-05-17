const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: path.resolve(__dirname, 'christmas-shop/main/index.js'),
        gifts: path.resolve(__dirname, 'christmas-shop/gifts/gifts.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: 'assets/[name][ext]',
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'christmas-shop/main/index.html'),
        chunks: ['index'], favicon: path.resolve(__dirname, 'christmas-shop/assets/favicon/favicon.ico')
    }), new HtmlWebpackPlugin({
        filename: 'gifts.html',
        template: path.resolve(__dirname, 'christmas-shop/gifts/gifts.html'),
        chunks: ['gifts'], favicon: path.resolve(__dirname, 'christmas-shop/assets/favicon/favicon.ico'),

    }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'christmas-shop/assets'),
                    to: path.resolve(__dirname, 'dist/assets')
                }
            ]
        })],
    devServer: {
        port: 3000,
        open: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                    },
                ],
                type: 'asset/resource',
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
        ],
    },
};
