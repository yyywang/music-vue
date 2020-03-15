<template>
  <div class="m-header">
    <div class="left">
      <logo></logo>
      <header-tab></header-tab>
    </div>
    <div class="right">
      <input class="search-input" type="search" name id />
      <div class="img-icons"></div>
      <div class="img-add"></div>
      <div class="img-notice"></div>
      <div class="img-back"></div>
      <div class="login">登录</div>
      <div class="register">注册</div>
    </div>
  </div>
</template>

<script>
import Logo from 'components/logo/logo'
import HeaderTab from 'components/header-tab/header-tab'

export default {
  components: {
    Logo,
    HeaderTab
  }
}
</script>

<style lang='stylus'>
@import '~common/stylus/mixin.styl'

.m-header {
  display flex
  height 60px
  padding-left 10%
  padding-right 10%
  bg-image('bg')
  background-size 100% 60px
  box-shadow 0 10px 10px #ccc
  .left {
    width 50%
    display flex
    align-items center
    .logo {
      align-self start
    }
    .header-tab {
      margin-left 20px
      width 50%
    }
  }
  .right {
    width 50%
    padding-left 40px
    display flex
    align-items center
    justify-content space-between
    .search-input {
      width 229px
      height 30px
      background rgba(255, 255, 255, 1)
      border 1px solid rgba(186, 190, 234, 1)
      opacity 0.7
      border-radius 8px
    }
    .img-add {
      width 20px
      height 20px
      background-size 20px 20px
      opacity 0.9
      bg-image('add')
    }
    .img-notice {
      width 20px
      height 18px
      background-size 20px 18px
      opacity 0.9
      bg-image('notice')
    }
    .img-back {
      width 20px
      height 20px
      background-size 20px 20px
      opacity 0.9
      bg-image('back')
    }
    .login {
      opacity 0.9
    }
    .register {
      opacity 0.9
    }
  }
}
</style>
