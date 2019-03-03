import Vue from 'vue'
import axios from 'axios'
import apiUrl from './url'
import core from '@/utils/core'
import msg from '@/const/msg/msg'
import { Message } from 'element-ui'

const request = {
  // get请求(直接返回结果)
  async getData (path, params, module, hint = true) {
    const awaitRetData = await request.get(path, params, module, hint, 'data')
    return awaitRetData
  },
  // post请求(直接返回结果)
  async postData (path, params, module, hint = true) {
    const awaitPostReulst = await request.post(
      path,
      params,
      module,
      hint,
      'data'
    )
    return awaitPostReulst
  },
  // get请求(直接返回code编码)
  async getCode (path, params, module, hint = true) {
    const awaitGetCode = await request.get(path, params, module, hint, 'code')
    return awaitGetCode
  },
  // post请求(直接返回结果,失败不提示)
  async postCode (path, params, module, hint = true) {
    const awaitPostCode = await request.post(path, params, module, hint, 'code')
    return awaitPostCode
  },
  // get请求
  async get (path, params, module, hint, result) {
    // 如果直接调用get方法,type默认为false
    if (!hint && !result) {
      hint = false
    }
    let config = { path, params, module, hint, result }
    config.method = 'get'
    const awaitGet = await request.request(config)
    return awaitGet
  },
  // post请求
  async post (path, params, module, hint, result) {
    // 如果直接调用post方法,type默认为false
    if (!hint && !result) {
      hint = false
    }
    let config = { path, params, module, hint, result }
    config.method = 'post'
    const awaitPost = await request.request(config)
    return awaitPost
  },
  // 上传文件
  async upFile (path, params, module, hint) {
    let config = { path, params, module, hint }
    config.method = 'post'
    config.headers = {
      'Content-type': 'multipart/form-data'
    }
    const awaitUpFile = await request.request(config)
    return awaitUpFile
  },
  // 发起请求
  request (config) {
    let { path, method, params, module, hint, result } = config
    const moduleUrl = apiUrl[params] || apiUrl[module]
    if (!apiUrl[module]) {
      hint = module
    }
    const contentPath = path.includes('noauth') ? '' : 'perp'
    if (path.includes('http')) {
      config.url = path
    } else {
      config.url = `${moduleUrl}${contentPath}/${path}`
    }
    if (method === 'post') {
      config.data = params
      delete config.params
    }
    return new Promise(async (resolve, reject) => {
      try {
        const ret = await axios(config)
        const data = ret.data
        const type = core.isSuccess(data) ? 'success' : 'error'
        // 当查询成功,并且不是get请求才显示消息提示
        if (type === 'success') {
          if (method !== 'get') {
            // 消息提示
            this.message(hint, data.resultMsg, type)
          }
        } else {
          // 消息提示
          this.message(hint, data.resultMsg, type)
        }
        // 结果处理
        this.resultHandle(resolve, data, result)
      } catch (err) {
        // 消息提示
        this.message(hint, msg.connectionFail, 'error')
        if (result === 'data') {
          resolve()
        } else {
          reject(err)
        }
      }
    })
  },
  // 结果处理
  resultHandle (resolve, ret, result) {
    if (core.isSuccess(ret)) {
      if (result === 'code') {
        resolve(true)
      } else if (result === 'data') {
        resolve(ret.resultData)
      } else {
        resolve(ret)
      }
    } else {
      // reslove
      if (result === 'code') {
        resolve(ret.resultCode)
      } else if (result === 'data') {
        resolve('')
      } else {
        resolve(ret)
      }
    }
  },
  // 消息提示
  message (hint, message = msg.exception, type) {
    const notHintArr = [false, 'silence'] // 此数组中的类型,失败不会提示
    // 消息提示
    if (!notHintArr.includes(hint)) {
      Message({ type, message })
    }
  }
}
for (let item in request) {
  if (item.indexOf('get') >= 0 || item.indexOf('post') >= 0) {
    Vue.prototype[`$${item}`] = request[item]
  }
}

export default request
