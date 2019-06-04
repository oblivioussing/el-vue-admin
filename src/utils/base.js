import Vue from 'vue'
import store from '@/store'

class Base {
  // 判断路由权限
  isAuthority (path) {
    const pathMap = store.state.menuTabs.pathMap
    const pathObj = pathMap[path]
    return pathObj && pathObj.authority
  }
  // 列表数据处理
  listProcess (obj, data, key = 'list') {
    obj.loading = false
    if (data) {
      obj[key] = data.rows || []
      obj.total = data.total
    }
  }
  // 列表删除验证
  async listDelVali (obj, field = 'id') {
    const id = obj.selectionList.map(item => item[field])
    if (!id.length) {
      obj.$message.error('请选择删除要删除的数据')
      return
    }
    const status = await obj.$element.confirm('确定删除?')
    if (status) {
      obj.loading = true
      return id.toString()
    } else {
      return false
    }
  }
  // 列表删除处理
  listDelProcess (obj, code) {
    obj.loading = false
    if (code === true) {
      obj.$message.success('删除成功')
      // 获取列表
      obj.getList()
    }
  }
  // 表单校验
  formValidate (obj, formName = 'form') {
    let status
    obj.$refs[formName].validate(valid => {
      status = valid
    })
    return status
  }
  // 表单处理
  formProcess (obj, code, msg = '保存成功') {
    obj.loading = false
    if (code === true) {
      obj.$message.success(msg)
      obj.$emit('update:visible', false)
    }
  }
}

Vue.prototype.$base = new Base()

export default new Base()
