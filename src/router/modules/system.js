const Home = () => import('@/views/Home')
const notFound = () => import('@/views/sys/404') // 404
const login = () => import('@/views/sys/login') // 登录
const index = () => import('@/views/sys/index') // 首页

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
      }
    ]
  }
]

export default system
