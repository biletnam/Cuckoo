var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src/pages');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080,
    stats: { colors: true },
    proxy: {
      '/api': {
        target: 'http://api.pro.mtime.cn',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,
      },
    },
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url?limit=40000',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['latest', 'react', 'stage-0'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(__dirname, 'src'),
    alias: {
      css: 'css',
      components: 'components',
      utils: 'utils',
      assets: 'assets',
      app: 'app',
    },
  },
  devtool: 'eval-source-map',
  eslint: {
    failOnWarning: true,
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Cuckoo',
      template: 'template.html',
    }),
  ],
};
