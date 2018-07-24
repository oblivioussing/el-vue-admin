import Mock from 'mockjs'
import user from './data/user'
import { unpayOrderList } from './data/order'

let result = {
  code: '10',
  data: '',
  msg: '查询成功'
}

// 登陆
Mock.mock(/api\/login/, ret => {
  result.data = user
  return result
})

// 获取待付款订单列表
Mock.mock(/api\/listUnpayOrder/, ret => {
  result.data = unpayOrderList.list
  return result
})