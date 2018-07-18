const webpack = require('webpack')
const environment = require('./build/environment')

module.exports = {
  baseUrl: '/cxperp/',
  configureWebpack: {
    plugins: [
      //定义全局变量
      new webpack.DefinePlugin({
        'process.env.STAGE': JSON.stringify(environment.stage),
        'process.env.LOCAL_URL': JSON.stringify(environment.localUrl)
      })
    ]
  },
  devServer: {
    port: 12000,
  }
}