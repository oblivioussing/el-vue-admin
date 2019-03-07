<template>
  <el-container>
    <!-- 筛选条件 -->
    <el-row class="toolbar search">
      <el-form :inline="true" :model="form">
        <el-form-item label="商品名称:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品编号:">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <!-- 操作按钮 -->
    <operate @query="query" @refresh="refresh" @reset="reset">
    </operate>
    <!-- 列表 -->
    <el-container class="list-container">
      <el-table :data="list" border height="100%">
        <el-table-column prop="date" label="日期">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column label="操作" width="110">
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
import list from '@/mixins/list'

export default {
  name: 'paidOrderList',
  mixins: [list],
  data () {
    return {}
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
    getList () {

    },
    // 新增
    add () {
    },
    // 编辑
    edit () {
    }
  }
}
</script>
