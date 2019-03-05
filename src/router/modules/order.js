const Home = () => import('@/views/home/index')
// 订单(待付款)
const unpayOrderAdd = () => import('@/views/order/unpay/add')
const unpayOrderEdit = () => import('@/views/order/unpay/edit')
const unpayOrderList = () => import('@/views/order/unpay/list')
const unpayOrderView = () => import('@/views/order/unpay/view')
// 订单(已付款)
const paidOrderList = () => import('@/views/order/paid/list')
const paidOrderView = () => import('@/views/order/paid/view')

const order = {
  path: '/order',
  component: Home,
  icon: 'order',
  meta: { title: '订单' },
  menu: true,
  children: [
    {
      path: '/unpayOrderAdd',
      component: unpayOrderAdd,
      meta: { title: '待付款订单新增' },
      menu: true
    },
    {
      path: '/unpayOrderEdit',
      component: unpayOrderEdit,
      meta: { title: '待付款订单编辑' }
    },
    {
      path: '/unpayOrderList',
      component: unpayOrderList,
      meta: { title: '待付款订单列表' },
      menu: true
    },
    {
      path: '/unpayOrderView',
      component: unpayOrderView,
      meta: { title: '待付款订单详情' }
    },
    {
      path: '/paidOrderList',
      component: paidOrderList,
      meta: { title: '已付款订单列表' },
      menu: true
    },
    {
      path: '/paidOrderView',
      component: paidOrderView,
      meta: { title: '已付款订单详情' }
    }
  ]
}

export default order
