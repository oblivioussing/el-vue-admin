import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/Home')
// 首页
const index = () => import('@/views/sys/index')
// 商品
const goodsList = () => import('@/views/goods/list')
const goodsView = () => import('@/views/goods/view')
const goodsAdd = () => import('@/views/goods/add')
// 设置
const dictList = () => import('@/views/setting/dict')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      hidden: true,
      component: Home,
      children: [
        { path: '/', component: index }
      ]
    },
    {
      path: '/goods',
      title: '商品',
      icon: 'goods',
      component: Home,
      children: [
        { path: '/goodsList', title: '商品列表', component: goodsList },
        { path: '/goodsAdd', title: '商品新增', component: goodsAdd, hidden: true },
        { path: '/goodsView', title: '商品详情', component: goodsView, hidden: true }
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
