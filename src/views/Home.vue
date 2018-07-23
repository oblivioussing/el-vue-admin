<template>
  <el-container class="h-100">
    <el-row>
      <!-- 左侧顶部logo -->
      <div class="el-menu-header">
        <img v-show="isCollapse" class="gravity-center" src="../assets/img/test/logo_smell.svg">
        <img v-show="!isCollapse" class="gravity-center" src="../assets/img/test/logo_large.svg">
      </div>
      <!-- 侧栏导航菜单 -->
      <el-menu @select="menuSelect" :collapse="isCollapse" :default-active="actived" :default-openeds="[stair]" unique-opened class="el-menu-vertical scroll-beautify">
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
    </el-row>
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
      <el-main class="h-100">
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
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      isCollapse: false, // 是否折叠菜单
    }
  },
  computed: {
    ...mapState('menuTabs', {
      menus: 'menus',
      tabs: 'tabs',
      actived: 'actived',
      exclude: 'exclude'
    }),
    ...mapGetters('menuTabs', {
      'stair': 'stair'
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
.el-menu-header {
  height: 60px;
  position: relative;
  width: 100%;
}
.el-menu-vertical {
  height: calc(100vh - 60px);
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
.ic-menu-toggle {
  color: #fff;
  cursor: pointer;
  left: 10px;
}
.el-tabs-container {
  padding: 5px 5px 0 5px;
}
</style>
