import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/Home')
// 商品
const goodsList = () => import('@/views/goods/list')
// 设置
const dictList = () => import('@/views/setting/dict')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/goods',
      title: '商品',
      icon: 'goods',
      component: Home,
      children: [
        { path: '/goodsList', title: '商品列表', component: goodsList }
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
