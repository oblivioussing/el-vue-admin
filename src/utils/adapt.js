(() => {
	window.$fate = {
		//table高度自适应
		tableAdapt(obj, callback) {
			window.onresize = () => {
				$fate.tableHeight(obj, callback)
			}
			window.onload = () => {
				$fate.tableHeight(obj, callback)
			}
			$fate.tableHeight(obj, callback)
		},
		//table高度
		tableHeight(obj, callback) {
			let commonH = $fate.commonHeight()
			const toolbar = document.querySelectorAll(obj.el + ' .el-row')
			const tableHeaderH = document.querySelector('.el-table__header-wrapper').clientHeight
			let toolbarH = 0
			toolbar.forEach((item, index) => {
				if (index < toolbar.length - 1) {
					toolbarH += (item.clientHeight + index * 5)
				}
			})
			const totalH = commonH + toolbarH
			const windowH = window.innerHeight
			callback(windowH - totalH - tableHeaderH - 30)
		},
		//高度自适应
		heightAdapt(obj) {
			window.onload = () => {
				$fate.heightAdapt(obj)
			}
			const adapt = obj.adapt || '.form-adapt'
			let elAdapt = document.querySelector(obj.el + ' ' + adapt)
			let commonH = $fate.commonHeight()
			commonH < 98 ? commonH = 98 : commonH
			const toolbar = document.querySelector(obj.el + ' .toolbar-btm')
			let toolbarH = toolbar && toolbar.clientHeight || 10
			const extraH = obj.extraH || 20
			const height = commonH + toolbarH + extraH
			elAdapt.style.height = `calc(100vh - ${height}px)`
		},
		//树形菜单高度自适应
		treeAdapt(obj) {
			window.onload = () => {
				$fate.treeAdapt(obj)
			}
			const adapt = obj.adapt || '.tree'
			let elAdapt = document.querySelector(obj.el + ' ' + adapt)
			let commonH = $fate.commonHeight()
			let extraH = obj.extraH || 15
			let height = commonH + extraH
			elAdapt.style.height = `calc(100vh - ${height}px)`
		},
		//编辑器高度自适应
		editorAdapt(obj) {
			window.onload = () => {
				$fate.editorHeight(obj)
			}
			window.onresize = () => {
				$fate.editorHeight(obj)
			}
			setTimeout(() => {
				$fate.editorHeight(obj)
			}, 200)
		},
		//编辑器高度
		editorHeight(obj) {
			const adapt = obj.adapt || '.edui-editor-iframeholder'
			const elAdapt = document.querySelector(obj.el + ' ' + adapt)
			const elPage = document.querySelector(obj.pageId + ' ' + adapt)
			const commonH = $fate.commonHeight()
			const toolbar = document.querySelectorAll(obj.pageId + ' .el-row')
			let toolbarH = 0
			toolbar.forEach((item, index) => {
				toolbarH += (item.clientHeight + index * 5)
			})
			const editorTool = document.querySelector(obj.pageId + ' .edui-toolbar')
			const editorToolH = editorTool && editorTool.clientHeight
			const extraH = obj.extraH || 20
			const height = commonH + extraH + toolbarH + editorToolH
			const windowH = window.innerHeight
			if (elAdapt) {
				elAdapt.style.height = windowH - height + 'px'
			}
		},
		//最顶部header和tab高度
		commonHeight() {
			let headerH = document.querySelector('.tab-header').offsetHeight
			let tabH = document.querySelector('.el-tabs').clientHeight
			return headerH + tabH
		},
	}
})()