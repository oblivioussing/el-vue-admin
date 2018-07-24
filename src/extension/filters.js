import Vue from 'vue'

// 时间戳转为日期
Vue.filter('fmtDate', val => {
  return moment(val).format('YYYY-MM-DD')
})
