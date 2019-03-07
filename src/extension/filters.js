import Vue from 'vue'
import dayjs from 'dayjs'

// 时间戳转为日期
Vue.filter('dateFmt', val => {
  return dayjs(val).format('YYYY-MM-DD')
})
Vue.filter('across', val => {
  return val || '--'
})
