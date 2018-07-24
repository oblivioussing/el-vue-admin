import Vue from 'vue'

// 时间戳转为日期
Vue.filter('fmtYYYYMMDD', val => {
  return moment(val).format('YYYY-MM-DD')
})
