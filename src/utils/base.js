import Vue from 'vue'
import SparkMD5 from 'spark-md5'
import { Message } from 'element-ui'
import store from '@/store'

class Base {
  // 获取文件md5
  getFileMd5 (file) {
    return new Promise(resolve => {
      let fileReader = new FileReader()
      let blobSlice = File.prototype.slice
      let chunkSize = 2097152
      // read in chunks of 2MB
      let chunks = Math.ceil(file.size / chunkSize)
      let currentChunk = 0
      let spark = new SparkMD5()
      fileReader.onload = function (e) {
        spark.appendBinary(e.target.result)
        currentChunk++
        if (currentChunk < chunks) {
          loadNext()
        } else {
          resolve(spark.end())
        }
      }
      function loadNext () {
        let start = currentChunk * chunkSize
        let end = start + chunkSize >= file.size ? file.size : start + chunkSize
        fileReader.readAsBinaryString(blobSlice.call(file, start, end))
      }
      loadNext()
    })
  }
  // 图片为jpg,并且小于2M
  isJpgLt2M (file) {
    const isJPG = file.type === 'image/jpeg'
    const isLt2M = this.isLt2M(file)
    if (!isJPG) {
      Message.error('上传图片只能是 JPG 格式!')
    }
    return isJPG && isLt2M
  }
  // 小于2M
  isLt2M (file) {
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      Message.error('大小不能超过 2MB!')
    }
    return isLt2M
  }
  // 判断路由权限
  isAuthority (path) {
    const pathMap = store.state.menuTabs.pathMap
    const pathObj = pathMap[path]
    return pathObj && pathObj.authority
  }
}

Vue.prototype.$base = new Base()

export default new Base()
