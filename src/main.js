import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 模块引用
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
import EventProxy from 'vue-event-proxy'

// 文件引用
import '@/utils/import'

// 插件使用
Vue.use(ElementUI, { size: 'small' })
Vue.use(contentmenu)
Vue.use(EventProxy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
