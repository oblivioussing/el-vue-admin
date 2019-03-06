const webpack = require('webpack')
const environment = require('./build/environment')

module.exports = {
  publicPath: '/',
  configureWebpack: {
    plugins: [
      // 定义全局变量
      new webpack.DefinePlugin({
        'process.env.STAGE': JSON.stringify(environment.stage),
        'process.env.LOCAL_URL': JSON.stringify(environment.localUrl)
      })
    ],
    externals: {
      'axios': 'axios',
      'element-ui': 'ELEMENT',
      'moment': 'moment',
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex'
    }
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
