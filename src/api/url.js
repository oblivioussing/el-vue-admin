// sit环境URL配置
const sitMap = {
  base: 'http://sit.chinazan.com/cxpba/', // 核心系统
  fs: 'http://sit.chinazan.com/cxpfs/', // 文件系统
  mao: 'http://sit.chinazan.com/cxpma/', // 市场营销
  wht: 'http://sit.chinazan.com/cxpwt/', // 微信系统
  log: 'http://sit.chinazan.com/cxplg/', // 日志系统
  spider: 'http://sit.chinazan.com/cxpsp/', // 爬虫系统
  sc: 'http://sit.chinazan.com/sc/' // 静态资源
}
// uat环境URL配置
const uatMap = {
  base: 'http://demo.chinazan.com/cxpba/', // 核心系统
  fs: 'http://demo.chinazan.com/cxpfs/', // 文件系统
  mao: 'http://demo.chinazan.com/cxpma/', // 市场营销
  wht: 'http://demo.chinazan.com/cxpwt/', // 微信系统
  log: 'http://demo.chinazan.com/cxplg/', // 日志系统
  spider: 'http://demo.chinazan.com/cxpsp/', // 爬虫系统
  sc: 'http://demo.chinazan.com/sc/' // 静态资源
}
// prod环境URL配置
const prodMap = {
  base: 'http://sa.chinazan.com/cxpba/', // 核心系统
  fs: 'http://sa.chinazan.com/cxpfs/', // 文件系统
  mao: 'http://sa.chinazan.com/cxpma/', // 市场营销
  wht: 'http://sa.chinazan.com/cxpwt/', // 微信系统
  log: 'http://sa.chinazan.com/cxplg/', // 日志系统
  spider: 'http://sa.chinazan.com/cxpsp/', // 爬虫系统
  sc: 'http://sa.chinazan.com/sc/' // 静态资源
}
// 本地环境配置
const localUrl = process.env.LOCAL_URL
const localMap = {
  base: `${localUrl}/cxpba/`, // 核心系统
  fs: `${localUrl}/cxpfs/`, // 文件系统
  mao: `${localUrl}/cxpma/`, // 市场营销
  wht: `${localUrl}/cxpwt/`, // 微信系统
  log: `${localUrl}/cxplg/`, // 日志系统
  spider: `${localUrl}/cxpsp/`, // 爬虫系统
  sc: `${localUrl}/sc/` // 静态资源
}

let stage = process.env.STAGE
console.log(stage)
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
