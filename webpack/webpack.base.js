/**
 * @desc 基础配置公共文件
 */
const path = require('path');
// clean-webpack-plugin 可以实现 webpack 每次打包之前，清空指定目录。
// 切记： webpack 的插件执行顺序是从后往前执行的。
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    // resolve.extensions
    // 表示在导入语句中没带文件后缀时，Webpack 会自动带上后缀去尝试访问文件是否存在。
    // 比如：
    // import A from './A' 时，会先寻找 A.js、找不到就去找 A.jsx，按照规则找，最后还是找不到，就会报错。
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // 设置别名
    alias: {
      '@src': path.join(__dirname, '../', 'app/render'),
      '@assets': path.join(__dirname, '../', 'assets/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()]
}
