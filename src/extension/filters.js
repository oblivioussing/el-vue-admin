import Vue from 'vue'
import dayjs from 'dayjs'

// 时间戳转为日期
Vue.filter('fmtDate', val => {
  return dayjs(val).format('YYYY-MM-DD')
})
