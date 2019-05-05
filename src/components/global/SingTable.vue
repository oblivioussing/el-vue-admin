<template>
  <el-container class="list-container">
    <el-table v-bind="$attrs" v-on="$listeners" border height="100%">
      <template v-for="(item,index) in columns">
        <el-table-column v-bind="item.attrs" :key="index" sortable show-overflow-tooltip=true>
          <template slot-scope="scope">
            <!-- 判断是否有slot -->
            <slot v-if="item.slot" :row="scope.row" :name="item.slot"></slot>
            <span v-else>{{scope.row[item.attrs.prop] | across}}</span>
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
