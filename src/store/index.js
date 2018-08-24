import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import menuTabs from './modules/menu-tabs' // 菜单切换
import user from './modules/user' // 用户信息

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menuTabs,
    user
  },
  plugins: [persistedState()]
})
