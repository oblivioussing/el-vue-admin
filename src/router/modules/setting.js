const Home = () => import('@/views/Home')
const dictList = () => import('@/views/setting/dict') // 字典管理

const setting = {
  path: '/setting',
  icon: 'setting',
  meta: { title: '设置' },
  menu: true,
  component: Home,
  children: [
    {
      path: '/dict',
      component: dictList,
      menu: true,
      meta: { title: '字典管理', id: 'dictItemList' }
    }
  ]
}

export default setting
