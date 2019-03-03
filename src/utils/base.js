import Vue from 'vue'
import store from '@/store'

class Base {
  // 判断路由权限
  isAuthority (path) {
    const pathMap = store.state.menuTabs.pathMap
    const pathObj = pathMap[path]
    return pathObj && pathObj.authority
  }
}

Vue.prototype.$base = new Base()

export default new Base()
