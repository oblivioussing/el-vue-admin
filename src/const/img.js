// 动态获取模块文件
const files = require.context('@/assets/img', false)
let modules = {}
files.keys().map(key => {
  const path = key.match(/\.\/(\S*)\./)[1]
  modules[path] = files(key)
})

export default modules
