import Vue from 'vue'

const adapter = {
  // 初始化
  init () {
    const vue = new Vue()
    vue.$nextTick(() => {
      // 加载自适应方法
      this.carry()
    })
    window.onresize = () => {
      // 加载自适应方法
      this.carry()
    }
  },
  // 加载自适应方法
  carry () {
    // 等待200ms
    setTimeout(() => {
      // 列表容器自适应
      this.listAdapter()
      // 表单容器高度自适应
      this.formAdapter()
    }, 200)
  },
  // 列表容器自适应
  listAdapter () {
    let containerEl = document.querySelector('.list-container')
    if (containerEl) {
      // 筛选框
      const searchEl = document.querySelector('.toolbar.search')
      const searchH = searchEl ? searchEl.offsetHeight : 0
      containerEl.style.height = `calc(100vh - 216px - ${searchH}px)`
    }
  },
  // 表单容器高度自适应
  formAdapter () {
    let containerEl = document.querySelector('.form-container')
    if (containerEl) {
      containerEl.style.height = 'calc(100vh - 158px)'
    }
  }
}

export default adapter
