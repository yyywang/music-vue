<template>
  <div class="m-header">
    <div class="header-inner">
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
        <div v-if="!logined" class="disboard">
          <div class="login">
            <router-link to="/login" tag="div">登录</router-link>
          </div>
          <div class="register">
            <router-link to="/register" tag="div">注册</router-link>
          </div>
        </div>
        <div v-else class="disboard">
          <div class="nickname">{{nickname}}</div>
          <div class="login-out" @click="outLogin">退出</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from 'components/logo/logo'
import HeaderTab from 'components/header-tab/header-tab'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Logo,
    HeaderTab
  },
  data() {
    return {
      logined: false,
      nickname: null
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapActions(['loginOut', 'setUserAndState']),
    init() {
      if (this.$store.getters.logined) {
        this.logined = true
        const { user } = this.$store.state
        this.nickname = user.nickname
      }
    },
    outLogin() {
      window.location.reload(true)
      this.loginOut()
      this.$router.push({path: '/'})
    },
  },
  created() {
    this.init()
  }
}
</script>

<style lang='stylus'>
@import '~common/stylus/mixin.styl'

.m-header {
  height 60px
  bg-image('bg')
  background-size 100% 60px
  box-shadow 0 10px 10px #ccc
  .header-inner {
    display flex
    margin 0 auto
    width 1200px
    height 60px
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
        padding-left 5px
        padding-right 5px
        font-size 14px
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
        color #ffffff
        hover-move-right()
      }
      .register {
        opacity 0.9
        color #ffffff
        hover-move-right()
      }
      .nickname {
        opacity 0.9
        color #ffffff
      }
      .login-out {
        opacity 0.9
        color #FF0033
        hover-move-right()
      }
      .disboard {
        display flex
        justify-content space-between
        min-width 80px
      }
    }
  }
}
</style>
