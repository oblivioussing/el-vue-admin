import router from '@/router'

const state = {
  menus: [], // 菜单列表
  tabs: [], // 顶部tab
  actived: '', // 需要激活的path
  tabsClose: {}, // tab关闭时应该跳转的路径
  pathTitleMap: {}, // path和title的映射
  exclude: '' // 销毁的路由组件
}

const mutations = {
  // 路由变化
  routerChange(state, to) {
    const skip = to.meta.skip
    const path = to.path
    state.actived = skip || path
    // 如果没有数据就先初始化
    if (!state.menus.length) {
      methods.init()
    }
    // 判断该路由是否已经存在
    const exist = state.tabs.some(item => item.path === path)
    // 不存在就添加一个tab
    !exist && methods.addTab(to)
  }
}

const methods = {
  // 初始化菜单
  init() {
    // 菜单列表
    state.menus = router.options.routes
    // 初始化path和title的映射
    methods.pathTitleInit()
  },
  // 初始化path和title的映射
  pathTitleInit() {
    const menus = state.menus
    menus.forEach(item => {
      const children = item.children
      if (children) {
        children.forEach(cItem => {
          let { path, title } = cItem
          title ? state.pathTitleMap[path] = title : ''
        })
      }
    })
  },
  // 添加一个tab
  addTab(to) {
    const path = to.path
    const title = state.pathTitleMap[path]
    state.tabs.push({ path, title })
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
