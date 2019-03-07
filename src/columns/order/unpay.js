const unpay = [
  {
    attrs: { prop: 'orderNo', label: '订单号' }
  },
  {
    attrs: { prop: 'orderTypeName', label: '订单类型' }
  },
  {
    attrs: { prop: 'date', label: '下单时间' },
    slot: 'date'
  },
  {
    attrs: { prop: 'buyerName', label: '购买方名称' }
  },
  {
    attrs: { prop: 'sellerName', label: '销售方名称' }
  },
  {
    attrs: { prop: 'expireTime', label: '订单有效期' }
  },
  {
    attrs: { label: '操作', fixed: 'right', width: '110' },
    slot: 'operate'
  }
]
export default unpay
