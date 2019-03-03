import Vue from 'vue'
import Router from 'vue-router'

import system from './modules/system' // 系统
import order from './modules/order' // 订单
import setting from './modules/setting' // 设置

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...system, // 系统
    order, // 订单
    setting // 设置
  ]
})
