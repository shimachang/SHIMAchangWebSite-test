const path = require('path');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');

module.exports = () => merge(commonConf, {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].js',
      assetModuleFilename: 'images/[name][ext]'
  },
    devtool: "source-map",
    devServer: {
      open: true,
      contentBase: path.join(__dirname, 'public'),
    },
    
});
