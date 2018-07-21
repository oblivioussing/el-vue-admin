import Vue from 'vue'
import Vuex from 'vuex'
import menuTabs from './modules/menuTabs' //主菜单切换
import navMenu from './modules/navMenu' //导航菜单

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menuTabs,
    navMenu
  }
})
