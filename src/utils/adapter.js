import Vue from 'vue'

const adapter = {
  // 初始化
  init() {
    const vue = new Vue()
    vue.$nextTick(() => {
      // 列表高度自适应
      this.listAdapter()
    })
  },
  // 列表高度自适应
  listAdapter() {
    let containerEl = document.querySelector('.list-container')
    if (containerEl) {
      containerEl.style.height = 'calc(100vh - 260px)'
    }
  }
}

export default adapter
