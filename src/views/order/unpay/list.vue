<template>
  <el-container>
    <!-- 筛选条件 -->
    <el-row class="toolbar search">
      <el-form :inline="true" :model="form" size="mini">
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
      <el-button @click="add" size="mini" type="primary" icon="plus">新增</el-button>
      <el-button-group class="vetically right-10">
        <el-button @click="query" size="mini" type="primary">查询</el-button>
        <el-button @click="refresh" size="mini" type="primary">刷新</el-button>
        <el-button @click="reset" size="mini" type="primary">重置</el-button>
      </el-button-group>
    </el-row>
    <!-- 列表 -->
    <el-container class="list-container">
      <el-table :data="list" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" border height="100%">
        <el-table-column label="订单编号">
          <template slot-scope="scope">
            <div @click="detail(scope.row.orderNo)" class="table-link">{{scope.row.orderNo}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="orderTypeName" label="订单类型"></el-table-column>
        <el-table-column label="下单时间">
          <template slot-scope="scope">{{scope.row.createTime|fmtDate}}</template>
        </el-table-column>
        <el-table-column prop="buyerName" label="购买方名称"></el-table-column>
        <el-table-column prop="sellerName" label="销售方名称"></el-table-column>
        <el-table-column label="订单有效期">
          <template slot-scope="scope">{{scope.row.expireTime|fmtDate}}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row.id)" type="primary" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-container>
    <!-- 分页 -->
    <el-footer>
      <pagination @getList="getList" :form.sync="form" :total="total"></pagination>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'unpayOrderList',
  data () {
    return {
      list: [], // 列表
      form: {}, // 表单
      total: 0, // 总条数
      loading: false // loading
    }
  },
  created () {
    // 获取列表
    this.getList()
    // 监听列表刷新事件
    this.$on('global:unpayList', ret => {
      this.$message.success('保存成功')
    })
  },
  methods: {
    // 获取列表
    async getList () {
      this.loading = true
      const data = await this.$getData('api/listUnpayOrder', this.form)
      this.loading = false
      if (data) {
        this.list = data
        this.total = this.list.length
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
    },
    // 查询
    query () {
      this.getlist()
    },
    // 刷新
    refresh () {
      this.reset()
      this.getlist()
    },
    // 重置
    reset () {
      this.form = {}
    }
  }
}
</script>
