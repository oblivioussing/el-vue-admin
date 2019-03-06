import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// 动态获取模块文件
const files = require.context('./modules', false, /\.js$/)
let modules = {}
files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default new Vuex.Store({
  modules,
  plugins: [persistedState({ key: process.env.BASE_URL })]
})
