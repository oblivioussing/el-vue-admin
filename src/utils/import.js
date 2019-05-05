import '@/extension/filters' // 过滤器
import '@/extension/directives' // 指令
import '@/extension/mixins' // mixin
import '@/extension/warden' // 路由守卫
import '@/extension/components' // 全局组件
import '@/utils/core' // core
import '@/utils/base' // base
import '@/utils/element' // element方法
import '@/api/request' // request
import '@/api/interceptors' // 请求拦截

// 引用svg
const files = require.context('../assets/svg/', false, /\.svg$/)
files.keys().map(files)
