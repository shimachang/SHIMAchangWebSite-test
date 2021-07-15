const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
      app: './src/js/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        assetModuleFilename: 'images/[name][ext]'
    },
    module: {
      rules: [
        {
          test:/\.js$/,
          exclude: /node_modules/,
          loader:'babel-loader',
        },
        {
          enforce: 'pre',
          test:/\.js$/,
          exclude: /node_modules/,
          loader:'eslint-loader',
          options: {
            fix: true}
        },
        {
          test:/\.scss$/,
          use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']
        },
        {
          test: /\.(gif|png|jpe?g|eot|wof|woff2?|ttf|svg|ico)$/,
          type: 'asset/resource'
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new webpack.ProvidePlugin({
        'jQuery': 'jquery',
        $: 'jquery'
      }),
      new HtmlWebpackPlugin({
        template: './src/html/index.html',
        inject: 'body',
        favicon: './src/images/favicon.ico'
      }),
      new HtmlWebpackPlugin({
        template: './src/html/guitar.html',
        filename: 'guitar.html',
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: './src/html/composing.html',
        filename: 'composing.html',
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: './src/html/mixing.html',
        filename: 'mixing.html',
        inject: 'body'
      }),
      new HtmlWebpackPlugin({
        template: './src/html/price.html',
        filename: 'price.html',
        inject: 'body'
      }),
    ]
  };
