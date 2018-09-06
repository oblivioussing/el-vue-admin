import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import url from './url'

const request = {
  // get请求
  async get (path, params) {
    const awaitGet = await axios.get(`${url}${path}`, params).then(ret => ret.data)
    return awaitGet
  },
  // post请求
  async post (path, params) {
    const qsParams = qs.stringify(params)
    const awaitPost = await axios.post(`${url}${path}`, qsParams).then(ret => ret.data)
    return awaitPost
  }
}

Vue.prototype.$request = request
