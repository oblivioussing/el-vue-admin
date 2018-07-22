import router from '@/router'

const state = {
  menus: [], // 菜单列表
  tabs: [], // 顶部tab
  actived: '', // 需要激活的path
  pathTitleMap: {}, // path和title的映射
  pathSkipMap: {}, // path和skip的映射
  exclude: '' // 销毁的路由组件
}

const mutations = {
  // 路由变化
  routerChange(state, to) {
    const path = to.path
    state.actived = path
    // 如果没有数据就先初始化
    if (!state.menus.length) {
      methods.init()
    }
    // 判断该路由是否已经存在
    const exist = state.tabs.some(item => item.path === path)
    // 不存在就添加一个tab
    !exist && methods.addTab(to)
  },
  // 关闭一个tab
  removeTab(state, path, jump = true) {
    const index = state.tabs.findIndex(item => item.path === path)
    state.tabs.splice(index, 1)
    let actived
    if (index > 0) {
      actived = state.tabs[index - 1].path
    } else {
      actived = state.tabs.length > 0 ? state.tabs[0].path : '/'
    }
    const skip = state.pathSkipMap[path]
    state.actived = skip || actived
    state.exclude = path.substr(1)
    $core.setSession('menuTabs', state.tabs)
    // 路由跳转
    jump && router.push(state.actived)
  }
}

const methods = {
  // 初始化菜单
  init() {
    // 菜单列表
    state.menus = router.options.routes
    // 初始化path和title的映射
    this.pathTitleInit()
    // 初始化path和skip的映射
    this.pathSkipInit()
    // 从缓存中获取tabs
    state.tabs = $core.getSession('menuTabs') || []
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
  // 初始化path和skip的映射
  pathSkipInit() {
    const menus = state.menus
    menus.forEach(item => {
      const path = item.path
      const children = item.children
      if (!children) {
        return
      }
      children.forEach(cItem => {
        const cPath = cItem.path
        const skip = path + 'List'
        if (cPath.indexOf('List') < 0 && cPath !== '/') {
          state.pathSkipMap[cPath] = skip
        }
      })
    })
  },
  // 添加一个tab
  addTab(to) {
    const path = to.path
    const title = state.pathTitleMap[path]
    title && state.tabs.push({ path, title })
    $core.setSession('menuTabs', state.tabs)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
