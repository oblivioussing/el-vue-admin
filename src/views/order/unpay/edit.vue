<template>
  <el-container>
    <el-form ref="form" :model="form" v-loading="loading" :inline="true" label-width="120px" class="form-container">
      <!-- 资源名称 -->
      <el-form-item label="资源名称:">
        <el-input v-model="form.rescName"></el-input>
      </el-form-item>
      <!-- 资源编号 -->
      <el-form-item label="资源编号:">
        <el-input v-model="form.rescCode"></el-input>
      </el-form-item>
      <!-- 父ID -->
      <el-form-item label="父ID:">
        <el-input v-model="form.parentId"></el-input>
      </el-form-item>
      <!-- 资源类型:1-MENU;2-URL -->
      <el-form-item label="资源类型:">
        <el-input v-model="form.rescType"></el-input>
      </el-form-item>
      <!-- 资源路径 -->
      <el-form-item label="资源路径:">
        <el-input v-model="form.rescPath"></el-input>
      </el-form-item>
      <!-- 资源图标 -->
      <el-form-item label="资源图标:">
        <el-input v-model="form.rescIcon"></el-input>
      </el-form-item>
      <!-- 方法类型:GET,PUT,DELETE,POST -->
      <el-form-item label="方法类型:">
        <el-input v-model="form.methodType"></el-input>
      </el-form-item>
      <!-- 序号 -->
      <el-form-item label="序号:">
        <el-input v-model="form.serialNo"></el-input>
      </el-form-item>
      <!-- 创建人登录类型 -->
      <el-form-item label="创建人登录类型:">
        <el-input v-model="form.createChannel"></el-input>
      </el-form-item>
      <!-- 创建人 -->
      <el-form-item label="创建人:">
        <el-input v-model="form.createBy"></el-input>
      </el-form-item>
      <!-- 创建时间 -->
      <el-form-item label="创建时间:">
        <el-input v-model="form.createTime"></el-input>
      </el-form-item>
      <!-- 修改人登录类型 -->
      <el-form-item label="修改人登录类型:">
        <el-input v-model="form.updateChannel"></el-input>
      </el-form-item>
      <!-- 修改人 -->
      <el-form-item label="修改人:">
        <el-input v-model="form.updateBy"></el-input>
      </el-form-item>
      <!-- 修改时间 -->
      <el-form-item label="修改时间:">
        <el-input v-model="form.updateTime"></el-input>
      </el-form-item>
    </el-form>
    <el-footer>
      <el-row class="toolbar footer">
        <el-button @click="save" type="primary">保存</el-button>
        <el-button @click="close">关闭</el-button>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'unpayOrderEdit',
  data () {
    return {
      form: {},
      orderTypeMap: {
        10: '已付款',
        11: '未付款'
      },
      rules: {
        orderType: [{ required: true, message: '请选择活动区域', trigger: 'change' }]
      }
    }
  },
  methods: {
    // 保存
    save () {
      this.$emit('global:unpayList')
      this.$store.commit('menuTabs/removeTab', 'unpayOrderEdit')
    },
    // 关闭
    close () {
      this.$store.commit('menuTabs/removeTab', 'unpayOrderEdit')
    }
  }
}
</script>
