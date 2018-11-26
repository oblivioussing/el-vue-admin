import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import url from './url'
import core from '@/utils/core'

// 接口请求地址
const { baseUrl, maoUrl, logUrl, spiderUrl, wxUrl, mockUrl } = url
// 模块Map
const moduleMap = {
  base: baseUrl,
  mao: maoUrl,
  log: logUrl,
  spider: spiderUrl,
  wx: wxUrl,
  mock: mockUrl
}

const request = {
  // get请求(直接返回结果)
  async getData (path, params, module, type = true) {
    const awaitRetData = await this.get(path, params, module, type, 'data')
    return awaitRetData
  },
  // post请求(直接返回结果)
  async postData (path, params, module, type = true) {
    const awaitPostReulst = await this.post(path, params, module, type, 'data')
    return awaitPostReulst
  },
  // get请求(直接返回code编码)
  async getCode (path, params, module, type = true) {
    const awaitGetCode = await this.get(path, params, module, type, 'code')
    return awaitGetCode
  },
  // post请求(直接返回结果,失败不提示)
  async postCode (path, params, module, type = true) {
    const awaitPostCode = await this.post(path, params, module, type, 'code')
    return awaitPostCode
  },
  // get请求
  async get (path, params, module, type, result) {
    // 如果直接调用get方法,type默认为false
    if (!type && !result) {
      type = false
    }
    let config = { path, params, module, type, result }
    config.method = 'get'
    const awaitGet = await this.request(config)
    return awaitGet
  },
  // post请求
  async post (path, params, module, type, result) {
    // 如果直接调用post方法,type默认为false
    if (!type && !result) {
      type = false
    }
    let config = { path, params, module, type, result }
    config.method = 'post'
    const awaitPost = await request.request(config)
    return awaitPost
  },
  // 上传文件
  async upFile (path, params, module, type) {
    let config = { path, params, module, type }
    config.method = 'post'
    config.headers = { 'Content-type': 'multipart/form-data' }
    const awaitUpFile = await request.request(config)
    return awaitUpFile
  },
  // 发起请求
  request (config) {
    let { path, method, params, module, type, result } = config
    const moduleUrl = moduleMap[params] || moduleMap[module]
    if (!moduleMap[module]) {
      type = module
    }
    config.url = path.indexOf('http') >= 0 ? path : `${moduleUrl}${path}`
    if (method === 'post') {
      config.data = qs.stringify(params)
      delete config.params
    }
    return new Promise(resolve => {
      axios(config)
        .then(ret => {
          // 结果处理
          this.resultHandle(resolve, ret.data, type, result)
        })
        .catch(err => {
          // 此数组中的类型,失败不会提示
          const notHintArr = [false, 'silence']
          !notHintArr.includes(type) && Message.error('服务器连接失败')
          if (result === 'data') {
            resolve()
          } else {
            resolve({ error: err, resMsg: '服务器连接失败' })
          }
        })
    })
  },
  // 结果处理
  resultHandle (resolve, ret, type, result) {
    if (core.isSuccess(ret)) {
      if (result === 'code') {
        resolve(true)
      } else if (result === 'data') {
        resolve(ret.resultData)
      } else {
        resolve(ret)
      }
    } else {
      const notHintArr = [false, 'silence'] // 此数组中的类型,失败不会提示
      // 消息提示
      !notHintArr.includes(type) && Message.error(ret.resMsg || '服务器错误')
      // reslove
      if (result === 'code') {
        resolve(ret.resultCode)
      } else if (result === 'data') {
        resolve('')
      } else {
        resolve(ret)
      }
    }
  }
}

Vue.prototype.$request = request
window.$request = request

export default request
