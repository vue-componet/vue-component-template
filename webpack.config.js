const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css分离
const webpackBar = require('webpackbar')
const portfinder = require('portfinder')
const open = require('opn')
const ip = require('ip').address()

const resolve = function(dir) {
  return path.resolve(__dirname, dir)
}

const devWebPackConfig = {
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'none',
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'js/[name].[hash].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.js$/,
        // include: resolve('src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {config: { path: resolve('.babelrc') }}
        }
      },
      {
        test: /\.(sa|sc|le|c)ss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: resolve('postcss.config.js') }
            },
          }
        ]
      },
      {
        test: /\.(styl|stylus)$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: resolve('postcss.config.js') }
            },
          },
          'stylus-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'index',
      template: './index.html'
    }), // 构建index.html
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }),
    new CleanWebpackPlugin(), // 自动清理打包目录下的文件
    new webpackBar(), // 打包/启动dev服务器进度
    // new webpack.HotModuleReplacementPlugin(), // 热模块替换开启
    new VueLoderPlugin() // vueLoader
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    },
    extensions: ['.vue', '.js']
  },
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 9000,
    publicPath: '/',
    // open: true,
    hot: true,
    quiet: true,
    after() {
      open(`http://${ip}:${this.port}`)
    },
    overlay: {
      warnings: false,
      errors: true
    }, // 浏览器全屏显示提示
    clientLogLevel: "none"
    // progress: true
  }
}

module.exports = new Promise((resolve, rejects) => {
  portfinder.basePort = process.env.PORT || 9000
  portfinder.getPort((err, port) => {
    if (err) {
      rejects(err)
    } else {
      process.env.PORT = port
      devWebPackConfig.devServer.port = port
      devWebPackConfig.plugins.push(new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [`你的程序运行在 http://${ip}:${port}`,`本地查看 http://localhost:${port}`]
        },
        clearConsole: true
      }))

      resolve(devWebPackConfig)
    }
  })
})