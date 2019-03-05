const webpack = require('webpack')
const environment = require('./build/environment')

module.exports = {
  baseUrl: '/',
  configureWebpack: {
    plugins: [
      // 定义全局变量
      new webpack.DefinePlugin({
        'process.env.STAGE': JSON.stringify(environment.stage),
        'process.env.LOCAL_URL': JSON.stringify(environment.localUrl)
      })
    ]
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
