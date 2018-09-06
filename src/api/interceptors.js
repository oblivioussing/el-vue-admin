import axios from 'axios'

axios.defaults.withCredentials = true // 允许携带cookie
axios.defaults.timeout = 5000 // 超时时间

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  () => {
    const code = this.$dict.serverFail
    return Promise.resolve({ code: code, msg: '服务器连接失败' })
  }
)
