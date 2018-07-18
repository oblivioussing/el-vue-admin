const state = {
	tabs: [{ path: '/', title: '首页', skip: false, save: false }], //顶部tab
	tabsClose: {}, //tab关闭时应该跳转的路径
	pathNameMap: { '/': '首页' }, //path和title的映射
	actived: { navName: '', tabName: '首页', path: '/' }, //当前页面的path和title
	exclude: '' //销毁的路由组件
}

const mutations = {
	//判断缓存中是否存在actived
	hasActived(state, path) {
		let homeActived = $core.getSession('homeActived')
		let homeTabs = $core.getSession('homeTabs')
		if (homeActived && homeActived.path !== path) {
			homeActived = state.actived
			homeTabs = []
		}
		state.actived = homeActived || state.actived
		state.tabs = homeTabs || []
	},
	//把路由中的path和title对应起来储存在vuex中
	addPathName(state, routes) {
		routes.forEach(item => {
			const navName = item.title;
			item.children && item.children.forEach(cItem => {
				const tabName = cItem.title
				state.pathNameMap[cItem.path] = { navName, tabName }
			})
		})
	},
	//添加一个tab
	addTab(state, obj) {
		const { path, skip, save } = obj
		const exist = state.tabs.some(item => {
			return item.path === path
		})
		if (!state.pathNameMap[path]) {
			return
		}
		const title = state.pathNameMap[path].tabName;
		!exist && state.tabs.push({ path, title, skip, save })
		state.tabsClose[path] = skip
		$core.setSession('homeTabs', state.tabs)
		$core.setSession('homeTabsClose', state.tabsClose)
	},
	//关闭一个tab
	removeTab(state, { path, index }) {
		const skip = state.tabsClose[path]
		index = index || state.tabs.findIndex((item, index) => {
			return item.path === path
		})
		state.tabs.splice(index, 1)
		let activedPath = index > 0 ? state.tabs[index - 1].path : '/'
		//销毁路由组件
		state.exclude = path.substr(1)
		//修改当前的actived
		activedPath = skip ? skip : activedPath
		this.commit('updateActived', activedPath)
		//修改缓存中的tabs
		$core.setSession('homeTabs', state.tabs)
	},
	//修改当前选中的actived
	updateActived(state, path) {
		const nameMap = state.pathNameMap[path]
		if (nameMap) {
			const navName = nameMap.navName
			const tabName = nameMap.tabName
			state.actived = { navName, tabName, path }
			$core.setSession('homeActived', state.actived)
		}
	},
	//清空被销毁的路由组件
	clearExclude(state) {
		state.exclude = ''
	}
}

export default {
	state,
	mutations
}