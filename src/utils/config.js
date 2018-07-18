;(() => {
  const urlMap = {
    local: process.env.LOCAL_URL + 'api',
    sit: 'http://xxx.xxx.xxx:xxxx/sit/api',
    uat: 'http://xxx.xxx.xxx:xxxx/uat/api',
    prod: 'http://xxx.xxx.xxx:xxxx/prod/api'
  }
  //sit,uat,prod
  let stage = process.env.STAGE
  //development,production
  const nodeEnv = process.env.NODE_ENV
  //nodeEnv为production并且stage不存在默认为生产环境
  if (nodeEnv === 'production' && !stage) {
    stage = 'prod'
  } else {
    //stage不存在默认为本地开发环境
    stage = stage || 'local'
  }
})()
