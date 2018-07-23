<template>
  <el-container>
    <el-row class="toolbar search">
      <el-form :inline="true" :model="form" size="mini">
        <el-form-item label="订单编号:">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="购买方名称:">
          <el-input v-model="form.buyerName"></el-input>
        </el-form-item>
        <el-form-item label="销售方名称:">
          <el-input v-model="form.sellerName"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="toolbar t-a-r">
      <el-button-group>
        <el-button size="mini" type="primary">查询</el-button>
        <el-button size="mini" type="primary">刷新</el-button>
        <el-button size="mini" type="primary">重置</el-button>
      </el-button-group>
    </el-row>
    <el-container class="list-container">
      <el-table :data="list" border height="100%">
        <el-table-column prop="date" label="订单编号" align="center"></el-table-column>
        <el-table-column prop="name" label="订单类型" align="center"></el-table-column>
        <el-table-column prop="address" label="下单时间" align="center"></el-table-column>
        <el-table-column prop="address" label="购买方名称" align="center"></el-table-column>
        <el-table-column prop="address" label="销售方名称" align="center"></el-table-column>
        <el-table-column prop="address" label="订单有效期" align="center"></el-table-column>
        <el-table-column label="操作" fixed="right" align="center">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row.id)" type="primary" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-container>
    <el-footer>
      <el-row class="toolbar m-t-5 t-a-c">
        <el-pagination :page-sizes="[10, 20, 30, 40]" :current-page="form.page" :page-size="form.size" :total="400" @current-change="currentChange" @size-change="sizeChange" layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'unpayOrderList',
  data() {
    return {
      form: {},
      list: []
    }
  },
  created() {
    for (let i = 0; i < 15; i++) {
      this.list.push(
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区'
        }
      )
    }
  },
  methods: {
    // 获取列表
    getlist() {

    },
    // 编辑
    edit(){

    },
    // page改变时
    currentChange(page) {
      this.form.page = page
      this.getlist()
    },
    // size改变时
    sizeChange(size) {
      this.form.size = size
      this.getlist()
    }
  }
}
</script>
