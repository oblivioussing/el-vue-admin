<template>
  <el-container>
    <el-form ref="form" :model="form" :rules="rules" size="small" :inline="true" label-width="100px" class="form-container">
      <h1 class="form-title">订单信息:</h1>
      <el-form-item prop="orderType" label="订单类型:">
        <el-select v-model="form.orderType" placeholder="请选择">
          <el-option v-for="(val,key) in orderTypeMap" :key="key" :label="val" :value="key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单有效期:">
        <el-date-picker v-model="form.payTime" value-format="timestamp" type="date" placeholder="请选择">
        </el-date-picker>
      </el-form-item>
      <h1 class="form-title">购买方信息:</h1>
      <el-form-item prop="sellerName" label="购买方:">
        <el-input v-model="form.sellerName">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item prop="buyerName" label="联系人姓名:">
        <el-input v-model="form.buyerName"></el-input>
      </el-form-item>
      <el-form-item prop="buyerPhone" label="联系人电话:">
        <el-input v-model="form.buyerPhone"></el-input>
      </el-form-item>
    </el-form>
    <el-footer>
      <el-row class="toolbar footer">
        <el-button @click="save" type="primary" size="mini">保存</el-button>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'unpayOrderEdit',
  data () {
    return {
      form: {}
    }
  }
}
</script>
