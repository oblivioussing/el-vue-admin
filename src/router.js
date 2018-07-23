import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home')
// 系统相关
const login = () => import('@/views/sys/login')
// 首页
const index = () => import('@/views/sys/index')
// 订单(待付款)
const unpayOrderList = () => import('@/views/order/unpay/list')
const unpayOrderEdit = () => import('@/views/order/unpay/edit')
const unpayOrderView = () => import('@/views/order/unpay/view')
// 订单(已付款)
const paidOrderList = () => import('@/views/order/paid/list')
const paidOrderView = () => import('@/views/order/paid/view')
// 设置
const dictList = () => import('@/views/setting/dict')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      hidden: true,
      component: login,
    },
    {
      path: '/',
      hidden: true,
      component: Home,
      children: [
        { path: '/', component: index }
      ]
    },
    {
      path: '/order',
      title: '订单',
      icon: 'order',
      component: Home,
      children: [
        // 订单(待付款)
        { path: '/unpayOrderList', title: '待付款订单列表', component: unpayOrderList },
        { path: '/unpayOrderEdit', title: '待付款订单编辑', component: unpayOrderEdit, hidden: true },
        { path: '/unpayOrderView', title: '待付款订单详情', component: unpayOrderView, hidden: true },
        // 订单(已付款)
        { path: '/paidOrderList', title: '已付款订单列表', component: paidOrderList },
        { path: '/paidOrderView', title: '已付款订单编辑', component: paidOrderView, hidden: true }
      ]
    },
    {
      path: '/setting',
      title: '设置',
      icon: 'setting',
      component: Home,
      children: [
        { path: '/dictList', title: '字典列表', component: dictList }
      ]
    }
  ]
})
