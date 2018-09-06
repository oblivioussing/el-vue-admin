<template>
  <el-container>
    <el-row class="toolbar search">
      <el-form :inline="true" :model="form" size="mini">
        <el-form-item label="商品名称:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品编号:">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="toolbar">
      <el-button @click="add" type="primary" size="mini">新增</el-button>
      <el-button-group class="vetically right-10">
        <el-button size="mini" type="primary">查询</el-button>
        <el-button size="mini" type="primary">刷新</el-button>
        <el-button size="mini" type="primary">重置</el-button>
      </el-button-group>
    </el-row>
    <el-container class="list-container">
      <el-table :data="list" border height="100%">
        <el-table-column prop="date" label="日期" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="address" label="地址" align="center">
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
  name: 'goodsList',
  data () {
    return {
      form: {},
      list: []
    }
  },
  created () {
    for (let i = 0; i < 15; i++) {
      this.list.push(
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      )
    }
  },
  methods: {
    // 获取列表
    getlist () {

    },
    // 新增
    add () {
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
