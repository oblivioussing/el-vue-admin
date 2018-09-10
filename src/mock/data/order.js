import Mock from 'mockjs'

// 待付款订单列表
const unpayOrderList = Mock.mock({
  'list|40-50': [
    {
      'id|+1': 1,
      'orderNo|100000-900000': 1,
      'orderTypeName|1': ['公司直售会员', '公司直售代理商', '代理商转售会员'],
      'createTime|1398250549123-1998250549123': 1,
      'buyerName': '@cname',
      'sellerName': '@cname',
      'expireTime|1398250549123-1998250549123': 1
    }
  ]
})

export {
  unpayOrderList
}
