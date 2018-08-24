import Vue from 'vue'
import moment from 'moment'

// 时间戳转为日期
Vue.filter('fmtDate', val => {
  return moment(val).format('YYYY-MM-DD')
})
