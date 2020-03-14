<template>
  <div class="logo">
    <div class="icon"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus'>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'

.logo {
  display inline-block
  width 161px
  height 42px
  background-color $color-theme
  border-bottom-left-radius 8px
  border-bottom-right-radius 8px
  .icon {
    width 84px
    height 60px
    background-size: 84px 60px
    bg-image('my')
    margin 0 auto
  }
}

</style>
