const state = {
  userInfo: {} // 用户信息
}
const mutations = {
  // 保存用户信息
  saveUser (state, obj) {
    state.userInfo = obj
  },
  // 清除用户信息
  removeUser (state) {
    state.userInfo = {}
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
