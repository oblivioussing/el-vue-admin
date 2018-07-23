import Mock from 'mockjs'
import apiUrl from '../config/api-url'
import user from './data/user'

const url = apiUrl.url
let result = {
  code: '10',
  data: '',
  msg: '查询成功'
}

// 登陆
Mock.mock(`${url}api/login`, ret => {
  result.data = user
  return result
})