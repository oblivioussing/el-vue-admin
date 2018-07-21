<template>
  <el-container class="h-100">
    <!-- 侧栏导航菜单 -->
    <el-menu default-active="1-1-1" class="el-menu-vertical" :collapse="isCollapse">
      <!-- 左侧顶部logo -->
      <div class="el-menu-header">
        <img v-show="isCollapse" class="gravity-center" src="../assets/img/logo_smell.svg">
        <img v-show="!isCollapse" class="gravity-center" src="../assets/img/logo_large.svg">
      </div>
      <!-- 菜单列表 -->
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
        <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
          <el-tab-pane :key="item.name" v-for="(item) in editableTabs" :label="item.title" :name="item.name">
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <!-- 内容展示区 -->
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      isCollapse: false,
      editableTabsValue: '2',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2
    }
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      }
      if (action === 'remove') {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    },
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
  color: #fff;
  left: 10px;
}
.el-tabs-container{
  padding: 5px 5px 0 5px;
}
</style>
