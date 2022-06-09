/**
 * @desc 渲染进程的相关配置
 */
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devConfig = {
  mode: 'development',
  entry: {
    // 👇 对应渲染进程的 app.jsx 入口文件
    index: path.resolve(__dirname, '../app/render/app.tsx')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    host: '127.0.0.1',  // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 7001,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 👇 以此文件为模版，自动生成 HTML
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    })
  ]
}

module.exports = webpackMerge.merge(baseConfig, devConfig);
//HtmlWebpackPlugin 自动生成一份以 /app/renderer/index.html 为模版的 HTML 文件。
// 注意此时的 target是针对 Electron 渲染进程。
// 最后通过 webpack-merge 合并导出一份完整配置。
