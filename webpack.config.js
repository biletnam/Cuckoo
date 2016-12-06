var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src/pages');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: APP_PATH,
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx'],
      root: path.resolve(__dirname, 'src'),
      alias: {
        "css": "css",
        "components": "components",
        "utils": "utils",
        "assets": "assets",
        "app": "app",
      }
  },
  devtool: 'eval-source-map',
  eslint: {
    failOnWarning: true
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Cuckoo',
      template: 'template.html'
    })
  ]
};