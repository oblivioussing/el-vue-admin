import Vue from 'vue'
import apiCode from '@/enum/apiCode'

class Core {
  constructor () {
    this.ls = localStorage
    this.ss = sessionStorage
  }
  // 添加localStorage
  setLocal (key, value) {
    let v = value
    v = typeof v === 'object' ? 'obj-' + JSON.stringify(v) : 'str-' + v
    this.ls.setItem(key, v)
  }
  // 获取localStorage
  getLocal (key) {
    let v = this.ls.getItem(key)
    if (v) {
      v = this.getStorageValue(v)
      return v
    }
  }
  // 添加session
  setSession (key, value) {
    let v = value
    v = typeof v === 'object' ? 'obj-' + JSON.stringify(v) : 'str-' + v
    this.ss.setItem(key, v)
  }
  // 获取session
  getSession (key) {
    let v = this.ss.getItem(key)
    if (v) {
      v = this.getStorageValue(v)
      return v
    }
  }
  // 清空某个localStorage
  rmLocal (key) {
    key && this.ls.removeItem(key)
  }
  // 清空所有localStorage
  clearLocal () {
    this.ls.clear()
  }
  // 清空某个session
  rmSession (key) {
    key && this.ss.removeItem(key)
  }
  // 清空所有session
  clearSession () {
    this.ss.clear()
  }
  // 获取值
  getStorageValue (v) {
    if (v.indexOf('obj-') === 0) {
      v = v.slice(4)
      return JSON.parse(v)
    } else if (v.indexOf('str-') === 0) {
      return v.slice(4)
    }
  }
  // 获取url参数
  getUrlParam (url) {
    let urlObject = {}
    if (/\?/.test(url)) {
      let urlString = url.substring(url.indexOf('?') + 1)
      let urlArray = urlString.split('&')
      for (let i = 0, len = urlArray.length; i < len; i++) {
        let urlItem = urlArray[i]
        let item = urlItem.split('=')
        urlObject[item[0]] = item[1]
      }
      return urlObject
    }
  }
  // 对象数组去重
  distinct (arr, field = 'id') {
    const res = new Map()
    return arr.filter(item => !res.has(item[field]) && res.set(item[field], 1))
  }
  // 简单数组去重
  sole (arr) {
    return Array.from(new Set(arr))
  }
  // 克隆
  clone (val) {
    return JSON.parse(JSON.stringify(val))
  }
  // 判断接口是否成功
  isSuccess (ret) {
    return ret.resultCode === apiCode.success
  }
  // 是否为空
  isEmpty (data) {
    if (!data) {
      return true
    }
    if (JSON.stringify(data) === '{}') {
      return true
    }
    if (Array.isArray(data) && !data.length) {
      return true
    }
  }
  // 获取dom
  dom (el) {
    return document.querySelector(el)
  }
  // 防抖
  debounce (fn, time) {
    let timeout = null
    return function () {
      timeout !== null && clearTimeout(timeout)
      timeout = setTimeout(fn, time)
    }
  }
  // 节流
  throttle (fn, time) {
    let timer = null
    return function () {
      if (!timer) {
        timer = setTimeout(function () {
          fn()
          timer = null
        }, time)
      }
    }
  }
}

Vue.prototype.$core = new Core()

export default new Core()
