const path = require('path');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');

module.exports = () => merge(commonConf, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'public'),
  },
});
