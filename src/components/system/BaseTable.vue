<template>
  <el-container class="list-container">
    <el-table v-bind="$attrs" v-on="$listeners" border height="100%">
      <template v-for="(item,index) in columns">
        <template v-if="item.prop">
          <el-table-column v-bind="item" :key="index"></el-table-column>
        </template>
        <!-- 操作按钮 -->
        <el-table-column v-else v-bind="item" :key="index">
          <template slot-scope="scope">
            <slot name="operate" :row="scope.row"></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </el-container>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: false
    }
  }
}
</script>

<style>
</style>
