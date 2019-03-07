<template>
  <el-container class="list-container">
    <el-table v-bind="$attrs" v-on="$listeners" border height="100%">
      <template v-for="(item,index) in columns">
        <el-table-column v-if="item.prop" v-bind="item" :key="index"></el-table-column>
      </template>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.id)" type="primary">编辑</el-button>
        </template>
      </el-table-column>
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
