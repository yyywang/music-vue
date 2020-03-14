<template>
  <div class="header-tab">
    <router-link tag="div" class="tab-item" to="/online">
      <span class="tab-link">在线欣赏</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">美音推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/user">
      <span class="tab-link">个人中心</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus'>
@import '~common/stylus/variable'

.header-tab {
  display inline-flex
  // height 60px
  // line-height 60px
  font-size $font-size-medium
  .tab-item {
    flex 1
    text-align center
    .tab-link {
      padding-bottom 10px
      color #fff
      opacity 0.9
    }
    &.router-link-active {
      .tab-link {
        // color $color-theme
        border-bottom 2px solid rgba(255,255,255,.9)
      }
    }
  }
}
</style>
