<template>
  <el-container class="list-container">
    <el-table v-bind="$attrs" v-on="$listeners" border height="100%">
      <el-table-column label="订单编号">
        <template slot-scope="scope">
          <div @click="detail(scope.row.orderNo)" class="table-link">{{scope.row.orderNo}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="orderTypeName" label="订单类型"></el-table-column>
      <el-table-column label="下单时间">
        <template slot-scope="scope">{{scope.row.createTime|fmtDate}}</template>
      </el-table-column>
      <el-table-column prop="buyerName" label="购买方名称"></el-table-column>
      <el-table-column prop="sellerName" label="销售方名称"></el-table-column>
      <el-table-column label="订单有效期">
        <template slot-scope="scope">{{scope.row.expireTime|fmtDate}}</template>
      </el-table-column>
      <el-table-column label="操作" width="110">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.id)" type="primary">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
export default {

}
</script>

<style>
</style>
