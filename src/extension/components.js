import Vue from 'vue'

// 动态获取组件
let global = require.context('../components/global', false, /\.vue$/) // 系统
let business = require.context('../components/business', false, /\.vue$/) // 业务
// 文件映射
const map = { global, business }
// 遍历组件
for (let item in map) {
  // 赋值为全局组件
  vest(map[item])
}
// 赋值为全局组件
function vest (contexts) {
  contexts.keys().forEach(key => {
    let component = contexts(key).default
    const name = key.replace(/(\.\/|\.vue)/g, '')
    Vue.component(name, component)
  })
}
