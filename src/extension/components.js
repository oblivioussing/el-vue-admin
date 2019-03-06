import Vue from 'vue'

// 动态获取组件
let system = require.context('../components/system', false, /\.vue$/) // 系统
let business = require.context('../components/business', false, /\.vue$/) // 业务
// 文件映射
const map = { system, business }
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
