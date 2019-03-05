const Home = () => import('@/views/home/index')
const notFound = () => import('@/views/system/404') // 404
const login = () => import('@/views/system/login') // 登录
const index = () => import('@/views/system/index') // 首页
const account = () => import('@/views/system/account') // 个人资料

const system = [
  {
    path: '*',
    component: notFound
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/',
    component: Home,
    meta: { title: '首页' },
    children: [
      {
        path: '/',
        component: index,
        meta: { title: '首页' }
      },
      {
        path: '/account',
        component: account,
        meta: { title: '个人资料' }
      }
    ]
  }
]

export default system
