import Vue from 'vue'
import core from '@/utils/core'

class Adapter {
  // 初始化
  init (id) {
    const vue = new Vue()
    vue.$nextTick(() => {
      // 等待200ms
      setTimeout(() => {
        // 加载自适应方法
        this.carry(id)
      }, 200)
    })
    window.onresize = core.throttle(() => {
      // 加载自适应方法
      this.carry(id)
    }, 200)
  }
  // 加载自适应方法
  carry (id) {
    // 列表容器自适应
    this.listAdapter(id)
    // 表单容器高度自适应
    this.formAdapter(id)
  }
  // 列表容器自适应
  listAdapter (id) {
    let containerEl = this.dom(id, '.list-container')
    if (containerEl) {
      // 获取顶部高度
      const topH = this.getTopHeight()
      // 筛选框
      const searchEl = this.dom(id, '.toolbar.search')
      const searchH = searchEl ? searchEl.offsetHeight : 0
      // 操作按钮
      const operateEl = this.dom(id, '.toolbar.operate')
      const operateH = operateEl ? operateEl.offsetHeight : 0
      // footer
      const footerEl = this.dom(id, '.el-footer')
      const footerH = footerEl ? footerEl.offsetHeight : 0
      // 高度
      const height = topH + searchH + operateH + footerH
      containerEl.style.height = `calc(100vh - ${height}px)`
    }
  }
  // 表单容器高度自适应
  formAdapter (id) {
    let containerEl = this.dom(id, '.form-container')
    if (containerEl) {
      // 获取顶部高度
      const topH = this.getTopHeight()
      // footer
      const footerEl = this.dom(id, '.el-footer')
      const footerH = footerEl ? footerEl.offsetHeight : 0
      // 高度
      const height = topH + footerH + 5
      containerEl.style.height = `calc(100vh - ${height}px)`
    }
  }
  // 获取顶部高度
  getTopHeight () {
    // header
    const headerEl = core.dom('.top-header')
    const headerH = headerEl ? headerEl.offsetHeight : 0
    // tab
    const tabEl = core.dom('.el-tabs-container')
    const tabH = tabEl ? tabEl.offsetHeight : 0
    return headerH + tabH + 10
  }
  // 获取dom元素
  dom (id, el) {
    if (id) {
      return core.dom(`#${id} ${el}`)
    } else {
      return core.dom(el)
    }
  }
}

export default new Adapter()
