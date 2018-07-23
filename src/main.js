import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 模块引用
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 插件使用
Vue.use(ElementUI)

// iconfont
import './assets/iconfont/iconfont'
import './assets/iconfont/iconfont.css'

// 样式引用
import './styles/base.scss'
import './styles/common.scss'
import './styles/element-ui.scss'
import './styles/reset.css'

// 全局变量
import core from '@/utils/core'
import request from '@/utils/request'

window.$core = core
window.$request = request

// ui自适应
import adapter from '@/utils/adapter'

//全局路由钩子
router.beforeEach((to, from, next) => {
  if (!$core.getSession('user') && to.path !== '/login') {
    next('/login')
  } else {
    // 通知menuTabs路由变化
    store.commit('menuTabs/routerChange', to)
    // resolve钩子
    next()
  }
})
router.afterEach((to, from) => {
  // ui自适应初始化
  adapter.init()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
