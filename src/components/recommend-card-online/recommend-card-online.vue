<template>
  <div class="recommend-card">
    <div class="title">无心快语</div>
    <div class="abstract">大理石开发老师的课大理石开发老师的课大理石开发老师的课大理石开发老师的课大理石开发老师的课大理石开发老师的课大理石开发老师的课大理石开发老师的课</div>
    <div class="footer">
      <div class="author">
        <span>By</span>
        <span class="grade">18</span>
        <span class="nickname">花无缺</span>
      </div>
      <div class="operator">···</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus'>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'

.recommend-card {
  hover-scale()
  background-color $color-bg-recommend-card
  border-radius 8px
  padding 15px 20px 10px 20px
  box-shadow 0 6px 6px #ccc
  .title {
    color #1E1C1D
    font-size 16px
  }
  .abstract {
    wrap-n-text(3)
    font-size 12px
    line-height 1.5em
  }
  .footer {
    display flex
    justify-content space-between
    align-items baseline
    font-size 12px
    height 2em
    .author {
      line-height 2em
    }
    .operator {
      font-weight bolder
      font-size 14px
      vertical-align baseline
      line-height 2em
      hover-move-right()
    }
  }
}
</style>
