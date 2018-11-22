// sit环境URL配置
const sitMap = {
  baseUrl: 'http://www.weixiangyidong.com/cxba/', // 核心系统
  fsUrl: 'http://www.weixiangyidong.com/cxfa/', // 文件系统
  maoUrl: 'http://www.weixiangyidong.com/cxma/', // 市场营销
  wechatUrl: 'http://www.weixiangyidong.com/cxwa/', // 微信系统
  logUrl: 'http://www.weixiangyidong.com/cxla/', // 日志系统
  spiderUrl: 'http://www.weixiangyidong.com/sp/', // 爬虫系统
  stacBaseUrl: 'http://www.weixiangyidong.com/sc/' // 静态资源
}
// uat环境URL配置
const uatMap = {
  baseUrl: 'http://www.weixiangyidong.com/cxba/', // 核心系统
  fsUrl: 'http://www.weixiangyidong.com/cxfa/', // 文件系统
  maoUrl: 'http://www.weixiangyidong.com/cxma/', // 市场营销
  wechatUrl: 'http://www.weixiangyidong.com/cxwa/', // 微信系统
  logUrl: 'http://www.weixiangyidong.com/cxla/', // 日志系统
  spiderUrl: 'http://www.weixiangyidong.com/sp/', // 爬虫系统
  stacBaseUrl: 'http://www.weixiangyidong.com/sc/' // 静态资源
}
// prod环境URL配置
const prodMap = {
  baseUrl: 'http://www.weixiangyidong.com/cxba/', // 核心系统
  fsUrl: 'http://www.weixiangyidong.com/cxfa/', // 文件系统
  maoUrl: 'http://www.weixiangyidong.com/cxma/', // 市场营销
  wechatUrl: 'http://www.weixiangyidong.com/cxwa/', // 微信系统
  logUrl: 'http://www.weixiangyidong.com/cxla/', // 日志系统
  spiderUrl: 'http://www.weixiangyidong.com/sp/', // 爬虫系统
  stacBaseUrl: 'http://www.weixiangyidong.com/sc/' // 静态资源
}
// 本地环境配置
const LOCAL_URL = process.env.LOCAL_URL
const localMap = {
  baseUrl: LOCAL_URL + 'cxba/', // 核心系统
  fsUrl: LOCAL_URL + 'cxfa/', // 文件系统
  maoUrl: LOCAL_URL + 'cxma/', // 市场营销
  logUrl: LOCAL_URL + 'cxla/', // 日志系统
  spiderUrl: LOCAL_URL + 'cxsa/app/', // 爬虫系统
  wxUrl: LOCAL_URL + 'cxwa/', // 微信系统
  stacBaseUrl: LOCAL_URL + 'sc/', // 静态资源
  mockUrl: 'http://rap2api.taobao.org/app/mock/19285/' // 模拟数据地址
}

// sit,uat,prod
let stage = process.env.STAGE
// development,production
const nodeEnv = process.env.NODE_ENV
// nodeEnv为production并且stage不存在默认为生产环境
if (nodeEnv === 'production' && !stage) {
  stage = 'prod'
} else {
  // stage不存在默认为本地开发环境
  stage = stage || 'local'
}

const stageMap = {
  sit: sitMap,
  uat: uatMap,
  prod: prodMap,
  local: localMap
}
const apiUrl = stageMap[stage]

export default apiUrl
