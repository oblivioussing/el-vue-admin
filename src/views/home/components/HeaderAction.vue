<template>
  <ul class="header-action flex justify-end">
    <li class="pointer p-l-r-5">
      <svg class="icon">
        <use xlink:href="#icon-message"></use>
      </svg>
    </li>
    <li class="pointer p-l-r-5">
      <svg class="icon">
        <use xlink:href="#icon-add"></use>
      </svg>
    </li>
    <li class="pointer p-l-r-5">
      <el-dropdown @command="personCommand">
        <span class="c-white">
          <svg class="icon">
            <use xlink:href="#icon-avatar"></use>
          </svg>
          <span class="p-l-5">张三</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="account">个人资料</el-dropdown-item>
          <el-dropdown-item command="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    // 用户选择
    personCommand (val) {
      if (val === 'account') {
        this.$router.push('account')
      } else {
        this.exit()
      }
    },
    // 退出
    exit () {
      this.$store.commit('menuTabs/removeTabAll')
      this.$router.push('login')
    }
  }
}
</script>
<style lang="scss" scoped>
.header-action {
  .c-white {
    color: $white;
  }
  .b-r {
    border-right: 1px $white solid;
  }
  .el-dropdown {
    font-size: 16px !important;
  }
}
</style>
