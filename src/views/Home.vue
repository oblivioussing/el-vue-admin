<template>
  <el-container class="h-100">
    <el-menu default-active="1-4-1" class="el-menu-vertical" :collapse="isCollapse">
      <div class="el-menu-header">
        <img v-show="isCollapse" class="gravity-center" src="../assets/img/logo_smell.svg">
        <img v-show="!isCollapse" class="gravity-center" src="../assets/img/logo_large.svg">
      </div>
      <el-submenu index="1">
        <template slot="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-menu-shrink"></use>
          </svg>
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
      <el-header class="rel">
        <svg @click="collapseToggle" class="icon vetically ic-menu-toggle">
          <use xlink:href="#icon-menu"></use>
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
  },
  methods: {
    // 菜单收缩和展开切换
    collapseToggle() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  .el-menu-header {
    height: 60px;
    position: relative;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
.ic-menu-toggle {
  color: #409eff;
  left: 10px;
}
</style>
