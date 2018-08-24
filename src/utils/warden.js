import router from '@/router'
import store from '@/store'
// ui自适应方法
import adapter from '@/utils/adapter' 

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
// 全局路由后置钩子
router.afterEach((to, from) => {
  // ui自适应初始化
  adapter.init()
})