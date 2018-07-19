import axios from 'axios'
import qs from 'qs'
import urlConfig from '../config/url'

axios.defaults.withCredentials = true // 允许携带cookie
axios.defaults.timeout = 5000 // 超时时间

// 接口请求地址
const url = urlConfig.url

const request = {
  // get请求
  async get(path, params) {
    const config = {
      method: 'get',
      url: url + path,
      params: params
    }
    return await request.request(config)
  },
  // post请求
  async post(path, params) {
    const config = {
      method: 'post',
      url: url + path,
      data: qs.stringify(params, { indices: false })
    }
    return await request.request(config)
  },
  // 上传文件
  async upFile(path, params) {
    const config = {
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' },
      url: url + path,
      data: qs.stringify(params)
    }
    return await request.request(config)
  },
  // 发起请求
  request(config) {
    return new Promise(resolve => {
      axios(config)
        .then(ret => {
          resolve(ret.data)
        })
        .catch(err => {
          resolve({ error: err, resultMsg: '服务器错误' })
        })
    })
  }
}

export default request
