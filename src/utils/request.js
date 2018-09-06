import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import apiUrl from '@/config/api-url'

axios.defaults.withCredentials = true // 允许携带cookie
axios.defaults.timeout = 5000 // 超时时间

// 接口请求地址
const host = apiUrl.url

const request = {
  // get请求
  async get (path, params) {
    const url = `${host}${path}`
    const syncGet = await axios.get(url, params).then(ret => ret.data)
    return syncGet
  },
  // post请求
  async post (path, params) {
    const url = `${host}${path}`
    const qsParams = qs.stringify(params)
    const syncPost = await axios.post(url, qsParams).then(ret => ret.data)
    return syncPost
  }
}

Vue.prototype.$request = request
