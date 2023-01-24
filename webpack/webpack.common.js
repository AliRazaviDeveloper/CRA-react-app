const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
module.exports = {
  entry: path.join(__dirname, "..", "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "./src", "index.html"),
    }),
    new MiniCssPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    open: true,
  },
  performance: { hints: false },
};
