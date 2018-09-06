import Vue from 'vue'

// vue自定义指令
(() => {
  // table滚动到底部
  Vue.directive('tableScrollBottom', {
    bind (el, binding) {
      const selecter = el.querySelector('.el-table__body-wrapper')
      const throttled = _.throttle(function () {
        let sign = 80
        const condition =
          this.scrollHeight - this.scrollTop === this.clientHeight &&
          this.scrollTop > sign
        sign = this.scrollTop
        condition && binding.value()
      }, 500)
      selecter && selecter.addEventListener('scroll', throttled)
    }
  })
})()
