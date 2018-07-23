import core from '@/utils/core'

const state = {
  operator: core.getSession('operator') || {}, // 操作员信息
  staff: core.getSession('staff') || {}, // 员工信息
  user: core.getSession('user') || {}  // 用户信息
}
const mutations = {
  // 保存用户信息
  saveUser(state, obj) {
    const { operatorDto, staffDto, userInfoDto } = obj
    state.operator = operatorDto
    state.staff = staffDto
    state.user = userInfoDto
    $core.setSession('operator', state.operator)
    $core.setSession('staff', state.staff)
    $core.setSession('user', state.user)
  }
}

const actions = {
  // 获取用户信息
  async getUser({ commit }) {
    const ret = await $request.get('cms/gada')
    if (ret.resultCode === $dict.success) {
      // 保存用户信息
      commit('saveUser', ret.resultData.adAccountDto)
    }
  }
}

export default {
  state,
  mutations,
  actions
}