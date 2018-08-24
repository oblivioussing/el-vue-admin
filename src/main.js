import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 模块引用
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import md5 from 'js-md5'

// 插件使用
Vue.use(ElementUI)

// iconfont引用
import './assets/iconfont/iconfont'
import './assets/iconfont/iconfont.css'

// 全局指令和过滤器
import '@/extension/filters'
import '@/extension/directives'

// js文件引用
import '@/mock'
import '@/utils/warden'
import core from '@/utils/core'
import request from '@/utils/request'
import { globalDict } from '@/config/dict'

// 全局变量
window.$core = core
window.$request = request
window.$dict = globalDict
window.md5 = md5

// 样式引用
import './styles/base.scss';
import './styles/core.scss';
import './styles/element-ui.scss';
import './styles/reset.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
