const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.js");

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
};

module.exports = merge(commonConfig, devConfig);
