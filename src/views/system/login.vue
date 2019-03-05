<template>
  <el-row class="bg-login">
    <el-form :model="form" :rules="rules" ref="form" class="login-container gravity-center">
      <h3 class="title">欢迎使用</h3>
      <el-form-item prop="loginName">
        <el-input v-model="form.loginName" type="text" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input v-model="form.pwd" type="password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <el-form-item>
        <el-button @click="login" :loading="loading" type="primary" class="w-100">登录</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
// import md5 from 'js-md5'

export default {
  data () {
    return {
      form: {
        loginName: 'admin',
        pwd: '123456'
      },
      checked: true,
      loading: false,
      rules: {
        loginName: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登陆
    login (ev) {
      const userInfo = {
        token: 123,
        authorityMenus: [{
          path: '/order',
          authority: true
        }, {
          path: '/unpayOrderList',
          authority: true
        }, {
          path: '/paidOrderList',
          authority: true
        }, {
          path: '/setting',
          authority: true
        }, {
          path: '/dict',
          authority: true
        }]
      }
      this.$store.commit('user/saveUserInfo', userInfo)
      this.$router.replace({ path: '/' })
      // this.$refs.form.validate(async valid => {
      //   if (!valid) {
      //     return
      //   }
      //   this.loading = true
      //   let form = JSON.parse(JSON.stringify(this.form))
      //   form.pwd = md5(form.pwd)
      //   const ret = await this.$post(api.login, form)
      //   this.loading = false
      //   if (this.$core.isSuccess(ret)) {
      //     this.$store.commit('user/saveUserInfo', ret.data)
      //     this.$store.commit('menuTabs/removeTabAll')
      //     this.$router.replace({ path: '/' })
      //   } else {
      //     this.$message.error(ret.msg)
      //   }
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-login {
  background: url(../../assets/img/test/bg_login.jpg) no-repeat;
  background-size: 100% 100%;
  height: 100%;
}
.login-container {
  background: #f8f8f9;
  border-radius: 5px;
  box-shadow: 0 0 25px #cac6c6;
  padding: 35px 35px 15px 35px;
  width: 350px;
  .title {
    color: #505458;
    margin: 0px auto 40px auto;
    text-align: center;
  }
  .el-input {
    width: 100%;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>
