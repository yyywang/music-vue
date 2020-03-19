<template>
  <div class="not-found text-center">
    <div class="content">
      <div class="first-line">
        <span>Page</span>
        <span class="bold">404</span>
      </div>
      <div class="second-line">Not</div>
      <div class="third-line">Found</div>
      <div class="operator">
        <router-link class="to-home" tag="div" to="/">
          <span class="tab-link">
            <i class="icon-home"></i>
            <span>返回主页</span>
          </span>
        </router-link>
        <div class="back" @click="backPrePage">
          <i class="icon-repeat"></i>
          <span>返回上级</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'

export default {
  methods: {
    backPrePage() {
      router.back()
    }
  }
}
</script>

<style lang='stylus'>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.not-found {
  .content {
    width 300px
    display flex
    flex-direction column
    align-items flex-start
    font-size 48px
    margin 0 auto
    margin-top 100px
    color #000000
    &>div {
      margin-bottom 30px
    }
    .first-line {
      display flex
      flex-direction row
      justify-content space-between
      width 100%
      align-items flex-end
      .bold {
        font-size 96px
      }
    }
    .operator {
      display flex
      flex-direction row
      width 100%
      justify-content space-between
      font-size 18px
      color $color-sub-theme
      .to-home,
      .back {
        hover-move-right()
      }
    }
  }
}
</style>
