const Home = () => import('@/views/home/index')
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
      meta: { title: '字典管理', id: 'dictItemList' },
      menu: true
    }
  ]
}

export default setting
