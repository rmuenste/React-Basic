var webpack = require("webpack");
var path = require("path");

// Copy to this distribution folder
var DIST_DIR = path.resolve(__dirname, "dist");
// The source folder
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/" 
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

module.exports = config;

// alternative syntax
// module exports = {
//   entry : SRC_DIR + ...
// };
