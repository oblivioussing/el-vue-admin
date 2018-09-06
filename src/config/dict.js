import Vue from 'vue'

// 全局字典
const dict = {
  /** 接口状态**/
  success: '10', // 成功
  authFail: '11', // 权限认证失败
  noLogin: '12', // 未登录
  longinExpire: '13', // 登陆超时
  locked: '14', // 用户被锁定
  serverFail: '15', // 服务器连接失败
  /** 文件类型**/
  pic: '10', // 图片
  video: '11', // 视频
  audio: '12', // 音频
  pdf: '13', // pdf
  word: '14', // word
  excel: '15', // excel
  txt: '16', // txt
  apk: '17', // apk
  zip: '18' // 压缩包
}

Vue.prototype.$dict = dict
