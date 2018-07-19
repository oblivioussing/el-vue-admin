import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 基础文件引用
import core from '@/utils/core'
import request from '@/utils/request'

// 全局变量
window.$core = core
window.$request = request

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
