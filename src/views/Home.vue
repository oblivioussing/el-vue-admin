<template>
  <el-container class="h-100">
    <!-- 侧栏导航菜单 -->
    <el-menu @select="menuSelect" :collapse="isCollapse" :default-active="actived" unique-opened class="el-menu-vertical">
      <!-- 左侧顶部logo -->
      <div class="el-menu-header">
        <img v-show="isCollapse" class="gravity-center" src="../assets/img/logo_smell.svg">
        <img v-show="!isCollapse" class="gravity-center" src="../assets/img/logo_large.svg">
      </div>
      <!-- 一级菜单 -->
      <el-submenu v-if="!item.hidden" v-for="item in menus" :index="item.path" :key="item.path">
        <template slot="title">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="'#icon-'+item.icon"></use>
          </svg>
          <span slot="title">{{item.title}}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item v-if="!children.hidden" v-for="children in item.children" :index="children.path" :key="children.path">
          {{children.title}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- 右侧内容区 -->
    <el-container>
      <!-- 右侧顶部 -->
      <el-header class="rel">
        <svg @click="collapseToggle" class="icon vetically ic-menu-toggle">
          <use xlink:href="#icon-menu"></use>
        </svg>
      </el-header>
      <!-- tab选项卡 -->
      <el-row class="el-tabs-container">
        <el-tabs v-show="tabs.length" @tab-click="tab" @tab-remove="removeTab" :value="actived" closable type="card">
          <el-tab-pane v-for="item in tabs" :key="item.path" :label="item.title" :name="item.path">
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <!-- 内容展示区 -->
      <el-main>
        <transition name="fade">
          <keep-alive :exclude="exclude">
            <router-view/>
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      isCollapse: false, // 是否折叠菜单
    }
  },
  computed: {
    ...mapState('menuTabs', {
      menus: state => state.menus,
      tabs: state => state.tabs,
      actived: state => state.actived,
      exclude: state => state.exclude
    })
  },
  methods: {
    //菜单切换
    menuSelect(path) {
      this.$router.push(path)
    },
    // 菜单收缩和展开切换
    collapseToggle() {
      this.isCollapse = !this.isCollapse
    },
    //tab切换
    tab(obj) {
      this.$router.push(obj.name)
    },
    //关闭tab
    removeTab(name) {
      this.$store.commit('menuTabs/removeTab', name)
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
  color: #fff;
  left: 10px;
}
.el-tabs-container {
  padding: 5px 5px 0 5px;
}
</style>
