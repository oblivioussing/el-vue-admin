import Vue from 'vue'
import { MessageBox } from 'element-ui'

class Element {
  // 确认框
  confirm (msg) {
    return new Promise(resolve => {
      MessageBox.confirm(msg, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          resolve(true)
        })
        .catch(() => {
          resolve(false)
        })
    })
  }
}

Vue.prototype.$element = new Element()
