import axios from 'axios'
import apiCode from '@/api/apiCode'

axios.defaults.withCredentials = true // 允许携带cookie
axios.defaults.timeout = 5000 // 超时时间

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  () => {
    return Promise.resolve({ code: apiCode.serverFail, msg: '服务器连接失败' })
  }
)
