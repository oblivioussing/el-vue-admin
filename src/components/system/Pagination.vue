<template>
  <el-footer>
    <el-row class="toolbar m-t-5 t-a-c">
      <el-pagination @current-change="currentChange" @size-change="sizeChange" :current-page="pageNum" :page-size="pageSize" :total="total" :page-sizes="[10, 20, 30, 50,100]" layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </el-row>
  </el-footer>
</template>

<script>
export default {
  props: {
    form: {},
    total: 0
  },
  data () {
    return {
      pageNum: 1, // 页码
      pageSize: 10 // 每页条数
    }
  },
  created () {
    const { pageNum, pageSize } = this.form
    if (pageNum && pageSize) {
      this.pageNum = pageNum
      this.pageSize = pageSize
    }
  },
  methods: {
    // page改变时
    currentChange (pageNum) {
      let form = JSON.parse(JSON.stringify(this.form))
      form.pageNum = pageNum
      this.$emit('update:form', form)
      this.$emit('getList')
    },
    // size改变时
    sizeChange (pageSize) {
      let form = JSON.parse(JSON.stringify(this.form))
      form.pageSize = pageSize
      this.$emit('update:form', form)
      this.$emit('getList')
    }
  }
}
</script>

<style>
</style>
