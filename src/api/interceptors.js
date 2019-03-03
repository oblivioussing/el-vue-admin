import axios from 'axios'
import router from '@/router'
import apiCode from '@/enum/apiCode'
import { Message } from 'element-ui'

axios.defaults.withCredentials = true // 允许携带cookie
axios.defaults.timeout = 60000 // 超时时间
// // 请求拦截器
axios.interceptors.request.use(
  config => {
    const data = config.data || {}
    config.data = data
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
axios.interceptors.response.use(response => {
  const arr = [
    apiCode.authFail, // 权限认证失败
    apiCode.noLogin, // 未登录
    apiCode.locked // 用户被锁定
  ]
  const data = response.data
  const code = data.resultCode
  if (arr.includes(code)) {
    Message.warning(data.resultMsg)
    router.replace('login')
  }
  return response
})
