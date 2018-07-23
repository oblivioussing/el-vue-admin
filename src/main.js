import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 模块引用
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'
import md5 from 'js-md5'
import mock from 'mockjs'

// 插件使用
Vue.use(ElementUI)

// iconfont引用
import './assets/iconfont/iconfont'
import './assets/iconfont/iconfont.css'

// 样式引用
import './styles/base.scss'
import './styles/core.scss'
import './styles/element-ui.scss'
import './styles/reset.css'

// js文件引用
import core from '@/utils/core'
import request from '@/utils/request'
import dict from '@/config/dict'

// 全局变量
window.$core = core
window.$request = request
window.$dict = dict
window.moment = moment
window.md5 = md5
window.Mock = mock

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
  // 用户信息
  const userInfo = store.state.user.userInfo
  if (!userInfo.token && to.path !== '/login') {
    next('/login')
  } else {
    // 通知menuTabs路由变化
    store.commit('menuTabs/routerChange', to)
    // resolve钩子
    next()
  }
})

// ui自适应
import adapter from '@/utils/adapter'

// 全局路由后置钩子
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
