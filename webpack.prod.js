const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');

module.exports = () => merge(commonConf, {
    mode: 'production',
    // entry: {app: './src/js/index.js'},
    // output: {
    //     path: path.resolve(__dirname, 'public'),
    //     filename: '[name].js',
    //     assetModuleFilename: 'images/[name][ext]'
    // },
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: '[name].css',
    //   }),
    //   new HtmlWebpackPlugin({
    //     template: './src/index.html',
    //     inject: 'body',
    //     minify: {
    //       collapseWhitespace: true,
    //       keepClosingSlash: true,
    //       removeComments: true,
    //       removeRedundantAttributes: true,
    //       removeScriptTypeAttributes: true,
    //       removeStyleLinkTypeAttributes: true,
    //       useShortDoctype: true
    //     }
    //   }),
    // ],
    // optimization: {
    //   minimize: true,
    //   minimizer: [
    //     new TerserPlugin(),
    //     new CssMinimizerPlugin()
    //   ],
    // }
});
