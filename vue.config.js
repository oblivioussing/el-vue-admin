const webpack = require('webpack')
const environment = require('./build/environment')

module.exports = {
  publicPath: '/admin',
  configureWebpack: {
    plugins: [
      // 定义全局变量
      new webpack.DefinePlugin({
        'process.env.STAGE': JSON.stringify(environment.stage),
        'process.env.LOCAL_URL': JSON.stringify(environment.localUrl)
      })
    ],
    // 使用cdn
    externals: {
      'axios': 'axios',
      'moment': 'moment',
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'element-ui': 'ELEMENT'
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
