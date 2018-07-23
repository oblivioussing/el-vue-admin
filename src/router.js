import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home')
// 系统相关
const login = () => import('@/views/sys/login')
// 首页
const index = () => import('@/views/sys/index')
// 商品
const orderList = () => import('@/views/order/list')
const orderView = () => import('@/views/order/view')
const orderAdd = () => import('@/views/order/add')
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
        { path: '/orderList', title: '商品列表', component: orderList },
        { path: '/orderAdd', title: '商品新增', component: orderAdd, hidden: true },
        { path: '/orderView', title: '商品详情', component: orderView, hidden: true }
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
