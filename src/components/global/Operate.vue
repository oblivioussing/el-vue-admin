<template>
  <el-row class="toolbar operate">
    <el-button-group>
      <el-button  @click="add" type="primary">新增</el-button>
      <!-- slot -->
      <slot name="left"></slot>
    </el-button-group>
    <el-button-group class="vetically right-10">
      <el-button @click="query" type="primary">查询</el-button>
      <el-button  @click="refresh" type="primary">刷新</el-button>
      <el-button @click="reset" type="primary">重置</el-button>
      <!-- slot -->
      <slot name="right"></slot>
    </el-button-group>
  </el-row>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    // 判断是否显示选项
    isShow (val) {
      return this.options.includes(val)
    },
    // 新增
    add () {
      this.$emit('add')
    },
    // 查询
    query () {
      this.$emit('query')
    },
    // 刷新
    refresh () {
      this.$emit('refresh')
    },
    // 重置
    reset () {
      this.$emit('reset')
    }
  }
}
</script>

<style>
</style>
