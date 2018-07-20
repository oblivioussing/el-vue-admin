<template>
  <el-container class="h-100">
    <el-menu default-active="1-4-1" class="el-menu-vertical" :collapse="isCollapse">
      <div class="el-menu-header">
        <img class="gravity-center" src="../assets/img/logo_large.svg">
      </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <el-container>
      <el-header>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-menu-shrink"></use>
        </svg>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      isCollapse: false
    }
  }
}
</script>

<style lang="scss">
.el-menu-vertical {
  .el-menu-header {
    height: 60px;
    position: relative;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>
