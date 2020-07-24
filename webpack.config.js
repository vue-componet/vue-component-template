const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoderPlugin = require('vue-loader/lib/plugin')

const resolve = function(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: '哈哈',
      template: './index.html'
    }), // 构建index.html
    new CleanWebpackPlugin(), // 自动清理打包目录下的文件
    // new webpack.HotModuleReplacementPlugin(), // 热模块替换开启
    new VueLoderPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    },
    extensions: ['.vue', '.js']
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    publicPath: '/',
    open: true,
    hot: true,
    clientLogLevel: 'error',
    // noInfo: true,
    stats: 'minimal',
    overlay: {
      warnings: false,
      errors: true
    }, // 浏览器全屏显示提示
    progress: true
  }
}