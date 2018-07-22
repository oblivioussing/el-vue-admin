import Vue from 'vue'

const adapter = {
  // 初始化
  init() {
    const vue = new Vue()
    vue.$nextTick(() => {
      // 列表容器自适应
      this.listAdapter()
      // 表单容器高度自适应
      this.formAdapter()
      // 导航菜单那容器自适应
      this.navMenuAdapter()
    })
  },
  // 列表容器自适应
  listAdapter() {
    let containerEl = document.querySelector('.list-container')
    if (containerEl) {
      containerEl.style.height = 'calc(100vh - 260px)'
    }
  },
  // 表单容器高度自适应
  formAdapter() {
    let containerEl = document.querySelector('.form-container')
    if (containerEl) {
      containerEl.style.height = 'calc(100vh - 160px)'
    }
  },
  // 导航菜单那容器自适应
  navMenuAdapter(){
    let containerEl = document.querySelector('.nav-menu-container')
    if (containerEl) {
      containerEl.style.height = 'calc(100vh - 60px)'
    }
  }
}

export default adapter
