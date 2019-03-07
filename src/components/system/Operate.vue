<template>
  <el-row class="toolbar operate">
    <el-button @click="add" type="primary" icon="plus">新增</el-button>
    <el-button-group class="vetically right-10">
      <el-button @click="query" type="primary">查询</el-button>
      <el-button @click="refresh" type="primary">刷新</el-button>
      <el-button @click="reset" type="primary">重置</el-button>
    </el-button-group>
  </el-row>
</template>

<script>
export default {
  props: ['add'],
  created () {
    console.log(this.add)
  }
}
</script>

<style>
</style>
