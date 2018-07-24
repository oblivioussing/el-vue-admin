<template>
  <el-container>
    <el-form ref="form" :model="form" size="small" :inline="true" label-width="100px" class="form-container">
      <h1 class="form-title">订单信息:</h1>
      <el-form-item label="订单类型:">
        <el-select v-model="form.orderType" placeholder="请选择">
          <el-option v-for="(val,key) in orderTypeMap" :key="key" :label="val" :value="key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="代理商等级:">
        <el-select v-model="form.agencyTargetGrade" placeholder="请选择">
          <el-option v-for="(val,key) in agencyGradeMap" :key="key" :label="val" :value="key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="orderState" label="订单状态:">
        <el-select placeholder="请选择" v-model="form.orderState">
          <el-option v-for="(val,key) in orderStateMap" :key="key" :label="val" :value="key"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-footer>
      <el-row class="toolbar m-t-5 t-a-r">
        <el-button type="primary" size="mini">保存</el-button>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'unpayOrderAdd',
  data() {
    return {
      form: {},
      orderTypeMap: {},
      agencyGradeMap: {},
      orderStateMap: {}
    }
  },
  created() { },
  methods: {

  }
}
</script>
