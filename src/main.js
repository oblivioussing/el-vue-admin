import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 模块引用
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 插件使用
Vue.use(ElementUI)

// 样式文件引用
import './styles/common.scss'
import './styles/element-ui.scss'
import './styles/reset.css'

// 全局变量
import core from '@/utils/core'
import request from '@/utils/request'

window.$core = core
window.$request = request

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
