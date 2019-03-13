import Vue from 'vue'

// 动态获取组件
let files = require.context('../components/global', false, /\.vue$/)

files.keys().forEach(key => {
  let component = files(key).default
  const name = key.replace(/(\.\/|\.vue)/g, '')
  Vue.component(name, component)
})

