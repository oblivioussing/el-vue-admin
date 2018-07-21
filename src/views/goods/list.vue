<template>
  <el-container>
    <el-row>
      <el-row class="toolbar">
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
        <el-button type="primary" size="mini">新增</el-button>
        <el-button-group class="vetically right-10">
          <el-button size="mini" type="primary">查询</el-button>
          <el-button size="mini" type="primary">刷新</el-button>
          <el-button size="mini" type="primary">重置</el-button>
        </el-button-group>
      </el-row>
    </el-row>
    <el-container class="list-container" style="height:300px;">
      <el-table :data="list" border height="100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-container>
    <el-footer>
      <el-row class="toolbar m-t-5 t-a-c">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'goodsList',
  data() {
    return {
      form: {},
      list: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  created() {
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
    onSubmit() {

    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
