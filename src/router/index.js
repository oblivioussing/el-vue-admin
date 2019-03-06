import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 动态获取模块文件
const files = require.context('./modules', true, /\.js$/)
let routes = []
files.keys().forEach(key => {
  routes = routes.concat(files(key).default)
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
