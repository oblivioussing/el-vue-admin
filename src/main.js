import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 模块引用
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// iconfont引用
import './assets/iconfont/iconfont'
import './assets/iconfont/iconfont.css'

// 全局js文件
import '@/extension/filters' // 指令
import '@/extension/directives' // 过滤器
import '@/extension/warden' // 路由守卫
import '@/utils/dict' // 字典
import '@/utils/core' // core
import '@/api/request' // request
import '@/api/interceptors' // 请求拦截

// js文件引用
import '@/mock' // mock

// 插件使用
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
