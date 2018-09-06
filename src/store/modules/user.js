const state = {
  userInfo: {} // 用户信息
}
const mutations = {
  // 保存用户信息
  saveUserInfo (state, obj) {
    state.userInfo = obj
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
