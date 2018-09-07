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
    <el-row class="toolbar">
      <el-button @click="add" size="mini" type="primary" icon="plus">新增</el-button>
      <el-button-group class="vetically right-10">
        <el-button @click="query" size="mini" type="primary">查询</el-button>
        <el-button @click="refresh" size="mini" type="primary">刷新</el-button>
        <el-button @click="reset" size="mini" type="primary">重置</el-button>
      </el-button-group>
    </el-row>
    <!-- 列表 -->
    <el-container class="list-container">
      <el-table :data="list" border height="100%">
        <el-table-column prop="orderNo" label="订单编号"></el-table-column>
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
      <el-row class="toolbar m-t-5 t-a-c">
        <el-pagination :page-sizes="[10, 20, 30, 40]" :current-page="form.page" :page-size="form.size" :total="total" @current-change="currentChange" @size-change="sizeChange" layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'unpayOrderList',
  data () {
    return {
      form: {},
      list: [],
      total: 0
    }
  },
  created () {
    // 获取列表
    this.getlist()
  },
  methods: {
    // 获取列表
    async getlist () {
      const ret = await this.$request.get('api/listUnpayOrder', this.form)
      if (this.$core.isSuccess(ret)) {
        this.list = ret.data
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
      const [page, size] = [1, 10]
      this.form = { page, size }
    },
    // page改变时
    currentChange (page) {
      this.form.page = page
      this.getlist()
    },
    // size改变时
    sizeChange (size) {
      this.form.size = size
      this.getlist()
    }
  }
}
</script>
