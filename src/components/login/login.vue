<template>
  <div class="login">
    <el-form
      :model="loginForm"
      ref="registerForm"
      label-width="70px"
      class="form-bg-panel"
    >
      <div class="form-title">
        <h2>登 录</h2>
      </div>
      <el-form-item label="学号" prop="account" size="large">
        <el-input v-model="loginForm.account" placeholder="请输入学号" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="secret" size="large">
        <el-input v-model="loginForm.secret" placeholder="请输入密码" size="medium" show-password></el-input>
      </el-form-item>
      <el-form-item class="content-right">
        <el-link class="register-link">
          <router-link to="/register">注册</router-link>
        </el-link>
        <span>/</span>
        <el-link class="forget-link">
          <router-link to="/forget">忘记密码?</router-link>
        </el-link>
      </el-form-item>
      <div class="text-center">
        <button class="btn-info btn-lg" @click="login">登录</button>
      </div>
    </el-form>
  </div>
</template>

<script>
import User from '@/lin/models/user'
import { mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      loginForm: {
        account: '2016329621072',
        secret: '123456',
        type: 300 // type == 300 代表通过学号登录
      }
    }
  },
  methods: {
    async login() {
      try {
        await User.getToken(this.loginForm.account, this.loginForm.secret, this.loginForm.type)
        await this.getInformation()
        this.$router.push({path: '/'})
        window.location.reload(true)
      } catch (e) {
        if (e.data.error_code === 10030) {
          this.$message.error(e.data.msg)
        }
      }
    },
    async getInformation() {
      try {
        // 尝试获取当前用户信息
        const user = await User.getPermissions()
        this.setUserAndState(user)
        this.setUserPermissions(user.permissions)
      } catch (e) {
        console.log(e)
      }
    },
    ...mapActions(['setUserAndState']),
    ...mapMutations({
      setUserPermissions: 'SET_USER_PERMISSIONS',
    }),
  }
}
</script>

<style lang='stylus'>
@import '~common/stylus/mixin.styl'
@import '~common/stylus/variable.styl'

.login {
  .el-form-item__label {
    font-size 18px
    color #829E9A
  }
  .register-link:hover,
  .forget-link:hover {
    color $color-sub-theme
    &:after {
      border-color $color-sub-theme
    }
  }
  .content-right {
    text-align right
  }
  // .form-bg-panel {
  //   .form-group {
  //     .remember-box {
  //       margin-right 10px
  //     }
  //     .remember-text {
  //       display inline-block
  //       vertical-align middle
  //       line-height 40px
  //       font-size 16px
  //     }
  //   }
  //   .register-and-forget {
  //     float right
  //     padding 20px 5px 30px 0
  //     color $color-sub-theme
  //     font-size 16px
  //     .register {
  //       display inline-block
  //       hover-move-right()
  //     }
  //     .forget {
  //       display inline-block
  //       margin-left 30px
  //       hover-move-right()
  //     }
  //   }
  //   .submit-container {
  //     clear both
  //   }
  // }
}
</style>
