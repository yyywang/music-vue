<template>
  <div class="login">
    <div class="form-bg-panel">
      <div class="form-title">
        <h2>登录</h2>
      </div>
      <div class="form-group">
        <label for="account">学号</label>
        <input type="text" name="account" id="account" />
      </div>
      <div class="form-group">
        <label for="secret">密码</label>
        <input type="password" name="secret" id="secret" />
      </div>
      <div class="form-group flex-end">
        <input class="remember-box" type="checkbox" name="remember" id="remember" />
        <span class="remember-text">30天内自动登录</span>
      </div>
      <div class="register-and-forget">
        <span class="register">
          <router-link to="/register" tag="div">注册</router-link>
        </span>
        <span class="forget">
          <router-link to="/forget" tag="div">忘记密码</router-link>
        </span>
      </div>
      <div class="form-group text-center submit-container">
        <button class="btn-default">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus'>
@import '~common/stylus/mixin.styl'
@import '~common/stylus/variable.styl'

.login {
  .form-bg-panel {
    .form-group {
      .remember-box {
        margin-right 10px
      }
      .remember-text {
        display inline-block
        vertical-align middle
        line-height 40px
        font-size 16px
      }
    }
    .register-and-forget {
      float right
      padding 20px 5px 30px 0
      color $color-sub-theme
      font-size 16px
      .register {
        display inline-block
        hover-move-right()
      }
      .forget {
        display inline-block
        margin-left 30px
        hover-move-right()
      }
    }
    .submit-container {
      clear both
    }
  }
}
</style>
