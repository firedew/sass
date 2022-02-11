const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

const isProd = process.env.NODE_ENV === 'production'
const dest = path.resolve(__dirname, 'dist')

module.exports = (env) => ({
  mode: isProd ? 'production' : 'development',
  entry: './docs/main.js',
  output: {
    publicPath: isProd && !env.local ? '/sass/' : '',
    path: dest,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss']
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /.vue$/, use: 'vue-loader' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './docs/index.html' }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new CopyPlugin({
      patterns: [{ from: './docs/static', to: path.join(dest, 'static') }]
    })
  ],
  devServer: {
    hot: true,
    allowedHosts: 'all',
    static: {
      directory: dest,
    },
  }
});
