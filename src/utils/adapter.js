import Vue from 'vue'

const adapter = {
  // 初始化
  init () {
    const vue = new Vue()
    vue.$nextTick(async () => {
      // 加载自适应方法
      this.carry()
    })
    window.onresize = () => {
      // 加载自适应方法
      this.carry()
    }
  },
  // 加载自适应方法
  async carry () {
    // 等待100ms
    await this.$core.sleep(100)
    // 列表容器自适应
    this.listAdapter()
    // 表单容器高度自适应
    this.formAdapter()
  },
  // 列表容器自适应
  listAdapter () {
    let containerEl = document.querySelector('.list-container')
    if (containerEl) {
      const searchEl = document.querySelector('.toolbar.search')
      const searchH = searchEl ? searchEl.offsetHeight : 0
      containerEl.style.height = `calc(100vh - 221px - ${searchH}px)`
    }
  },
  // 表单容器高度自适应
  formAdapter () {
    let containerEl = document.querySelector('.form-container')
    if (containerEl) {
      containerEl.style.height = 'calc(100vh - 180px)'
    }
  }
}

export default adapter
