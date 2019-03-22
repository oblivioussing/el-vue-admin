const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
const environment = require('./build/environment')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/admin',
  configureWebpack: {
    plugins: [
      // 定义全局变量
      new webpack.DefinePlugin({
        'process.env.STAGE': JSON.stringify(environment.stage),
        'process.env.LOCAL_URL': JSON.stringify(environment.localUrl)
      }),
      // gzip压缩
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 10240, // 超过10k进行压缩
        deleteOriginalAssets: false // 是否删除源文件
      })
    ],
    // 使用cdn
    externals: {
      'axios': 'axios',
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'element-ui': 'ELEMENT'
    }
  },
  chainWebpack: config => {
    // 添加新的svg-sprite-loader处理svgIcon
    config.module
      .rule('svgIcon')
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/svg'))
      .end()
      .use('svg-sprite-loader') // 一定要添加use
      .loader('svg-sprite-loader')
      .tap(options => {
        options = {
          symbolId: 'icon-[name]'
        }
        return options
      })
    // 原有的svg图像处理loader添加exclude
    config.module
      .rule('svg')
      .exclude
      .add(resolve('src/assets/svg'))
      .end()
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/variable.scss";@import "@/styles/mixins.scss";`
      }
    }
  },
  devServer: {
    port: 8080
  }
}
