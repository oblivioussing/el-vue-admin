import Mock from 'mockjs'
import user from './data/user'
import { unpayOrderList } from './data/order'

let result = {
  resultCode: '10',
  resultData: '',
  resMsg: '查询成功'
}

// 登陆
Mock.mock(/api\/login/, ret => {
  result.data = user
  return result
})

// 获取待付款订单列表
Mock.mock(/api\/listUnpayOrder/, ret => {
  result.resultData = unpayOrderList.list
  return result
})
