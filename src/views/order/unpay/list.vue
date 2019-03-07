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
    <operate :options="['add','query','refresh','reset']" @add="add" @query="query" @refresh="refresh" @reset="reset">
    </operate>
    <!-- 列表 -->
    <base-table :data="list" :columns="columns" v-loading="loading">
      <!-- 下单时间 -->
      <template v-slot:date="scope">
        {{scope.row.date | dateFmt}}
      </template>
      <!-- 操作 -->
      <template v-slot:operate="scope">
        <el-button @click="edit(scope.row)" type="primary">编辑</el-button>
      </template>
    </base-table>
    <!-- 分页 -->
    <pagination @getList="getList" :form.sync="form" :total="total"></pagination>
  </div>
</template>

<script>
import list from '@/mixins/list'
import columns from '@/columns/order/unpay'

export default {
  name: 'unpayOrderList',
  mixins: [list],
  data () {
    return {
      columns: columns
    }
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
            id: i,
            orderNo: 123456,
            orderTypeName: '矿泉水',
            date: new Date().getTime(),
            buyerName: '',
            sellerName: '李四',
            expireTime: new Date().getTime()
          }
        )
      }
    },
    // 新增
    add () {
      this.$router.push('unpayOrderAdd')
    },
    // 编辑
    edit (row) {
      this.$router.push('unpayOrderEdit')
    },
    // 详情
    detail () {
      this.$router.push('unpayOrderView')
    }
  }
}
</script>
