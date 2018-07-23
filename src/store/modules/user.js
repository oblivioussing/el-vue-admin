import core from '@/utils/core'

const state = {
  userInfo: core.getSession('userInfo') || {}  // 用户信息
}
const mutations = {
  // 保存用户信息
  saveUserInfo(state, obj) {
    state.userInfo = obj
    $core.setSession('userInfo', state.userInfo)
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