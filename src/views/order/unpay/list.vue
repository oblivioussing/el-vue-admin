<template>
  <div>
    <!-- 筛选条件 -->
    <el-row class="toolbar search">
      <el-form :inline="true" :model="form">
        <el-form-item label="订单编号:">
          <el-input v-model="form.orderNo"></el-input>
        </el-form-item>
        <el-form-item label="购买方名称:">
          <el-input v-model="form.buyerName"></el-input>
        </el-form-item>
        <el-form-item label="销售方名称:">
          <el-input v-model="form.sellerName"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <!-- 操作按钮 -->
    <el-row class="toolbar operate">
      <el-button @click="add" type="primary" icon="plus">新增</el-button>
      <el-button-group class="vetically right-10">
        <el-button @click="query" type="primary">查询</el-button>
        <el-button @click="refresh" type="primary">刷新</el-button>
        <el-button @click="reset" type="primary">重置</el-button>
      </el-button-group>
    </el-row>
    <!-- 列表 -->
    <base-table :data="list" v-loading="loading"></base-table>
    <!-- 分页 -->
    <pagination @getList="getList" :form.sync="form" :total="total"></pagination>
  </div>
</template>

<script>
import list from '@/mixins/list'

export default {
  name: 'unpayOrderList',
  mixins: [list],
  data () {
    return {}
  },
  created () {
    // 获取列表
    this.getList()
    // 监听列表刷新事件
    this.$on('global:unpayList', ret => {
      this.getList()
    })
  },
  methods: {
    // 获取列表
    async getList () {
      for (let i = 0; i < 15; i++) {
        this.list.push(
          {
            orderNo: 123456,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        )
      }
    },
    // 新增
    add () {
      this.$router.push('unpayOrderAdd')
    },
    // 编辑
    edit () {
      this.$router.push('unpayOrderEdit')
    },
    // 详情
    detail () {
      this.$router.push('unpayOrderView')
    }
  }
}
</script>
