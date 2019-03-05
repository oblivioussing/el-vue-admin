<template>
  <el-container class="h-100">
    <el-row>
      <!-- 左侧顶部logo -->
      <div class="el-menu-header">
        <img v-show="isCollapse" class="gravity-center" :src="testImg.logo_smell">
        <img v-show="!isCollapse" class="gravity-center" :src="testImg.logo_large">
      </div>
      <!-- 侧栏导航菜单 -->
      <el-menu @select="menuSelect" :collapse="isCollapse" :default-active="actived" :default-openeds="[stair]" unique-opened class="el-menu-vertical">
        <!-- 一级菜单 -->
        <template v-for="item in menus">
          <el-submenu v-if="isMenu(item)" :index="item.path" :key="item.path">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-'+item.icon"></use>
              </svg>
              <span slot="title">{{titleFmt(item.meta)}}</span>
            </template>
            <!-- 二级菜单 -->
            <template v-for="children in item.children">
              <el-menu-item v-if="isMenu(children)" :index="children.path" :key="children.path">
                {{titleFmt(children.meta)}}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </el-row>
    <!-- 右侧内容区 -->
    <el-container>
      <!-- 右侧顶部 -->
      <el-header class="top-header rel">
        <svg @click="collapseToggle" class="icon vetically ic-menu-toggle">
          <use xlink:href="#icon-menu"></use>
        </svg>
        <!-- 功能选择 -->
        <header-action></header-action>
      </el-header>
      <!-- tab选项卡 -->
      <el-row class="el-tabs-container">
        <el-tabs v-show="tabs.length" @tab-click="tab" @tab-remove="removeTab" :value="actived" type="card">
          <el-tab-pane v-for="item in tabs" :closable="item.path!=='/'" :key="item.path" :name="item.path">
            <span slot="label" v-contextmenu:contextmenu @contextmenu="contextmenu(item.path)">{{titleFmt(item)}}</span>
          </el-tab-pane>
        </el-tabs>
        <v-contextmenu ref="contextmenu">
          <v-contextmenu-item @click="closeTab">关闭</v-contextmenu-item>
          <v-contextmenu-item @click="closeTabOther">关闭其他</v-contextmenu-item>
          <v-contextmenu-item @click="closeTabAll">关闭全部</v-contextmenu-item>
        </v-contextmenu>
      </el-row>
      <!-- 内容展示区 -->
      <el-main class="h-100">
        <transition>
          <keep-alive :exclude="exclude">
            <router-view />
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import HeaderAction from './components/HeaderAction'
import testImg from '@/const/img/test'

export default {
  name: 'home',
  components: { HeaderAction },
  data () {
    return {
      isCollapse: false, // 是否折叠菜单
      contextmenuPath: '', // 鼠标右键选中的path
      testImg: testImg // 测试图片
    }
  },
  created () {
    // 菜单初始化
    this.$store.commit('menuTabs/menuInit')
  },
  computed: {
    ...mapState('menuTabs', {
      menus: 'menus', // 菜单列表
      tabs: 'tabs', // 顶部tab
      actived: 'actived', // 需要激活的path
      exclude: 'exclude' // 销毁的路由组件
    }),
    ...mapGetters('menuTabs', {
      'stair': 'stair' // 当前路由的父级path
    })
  },
  methods: {
    // 是否显示菜单
    isMenu (item) {
      const isMenu = item.menu === true
      // 判断路由权限
      const isAuthority = this.$base.isAuthority(item.path)
      return isMenu && isAuthority
    },
    // title转化
    titleFmt (item) {
      return item ? item.title : ''
    },
    // 菜单切换
    menuSelect (path) {
      this.$router.push(path)
    },
    // 菜单收缩和展开切换
    collapseToggle () {
      this.isCollapse = !this.isCollapse
    },
    // tab切换
    tab (obj) {
      this.$router.push(obj.name)
    },
    // 关闭tab
    removeTab (name) {
      this.$store.commit('menuTabs/removeTab', name)
    },
    // 关闭当前tab
    closeTab () {
      this.removeTab(this.contextmenuPath)
    },
    // 关闭其他tab
    closeTabOther () {
      this.$store.commit('menuTabs/removeTabOther', this.contextmenuPath)
    },
    // 关闭所有tab
    closeTabAll () {
      this.$store.commit('menuTabs/removeTabAll')
    },
    // 菜单显示时触发
    contextmenu (path) {
      this.contextmenuPath = path
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-header {
  height: 50px;
  position: relative;
  width: 100%;
}
.el-menu-vertical {
  @include scroll-beautify;
  height: calc(100vh - 50px);
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
.top-header {
  color: $white;
  .ic-menu-toggle {
    cursor: pointer;
    left: 10px;
  }
}
.el-tabs-container {
  padding: 5px 5px 0 5px;
}
</style>
