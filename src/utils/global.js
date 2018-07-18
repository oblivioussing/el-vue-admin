import { Message } from 'element-ui'
;(() => {
  let u = {}
  //图片为jpg,并且小于2M
  u.isJpgLt2M = file => {
    const isJPG = file.type === 'image/jpeg'
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isJPG) {
      Message.error('上传图片只能是 JPG 格式!')
    }
    if (!isLt2M) {
      Message.error('上传图片大小不能超过 2MB!')
    }
    return isJPG && isLt2M
  }

  u.lt2M = file => {
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      Message.error('上传图片大小不能超过 2MB！')
    }
    return isLt2M
  }

  window.$global = u
})()
