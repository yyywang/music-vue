<template>
  <div class="homework-card">
    <div class="content">
      <div class="score">99分</div>
      <div class="title">期末作业</div>
      <div class="abstract">
        学习要点：
        1、请结合电子版教材学习96-105页内容；也可习96-105页内容；也可习96-105页内容；也可习96-105页内容；也可以选择《基础乐理知识》教材中相对应的内容学教材中相对应的内容学
      </div>
    </div>
    <div class="operator">
      <div class="view-comment">查看点评</div>
      <div class="review-homework">修改作业</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus'>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.homework-card {
  min-width 386px
  padding-top 10px
  padding-bottom 10px
  .content {
    background-color $color-theme-md
    border-radius 8px
    padding-bottom 1px
    .score {
      float right
      font-size 18px
      height 36px
      line-height 36px
      padding-left 15px
      padding-right 15px
      border-bottom-left-radius 8px
      border-top-right-radius 8px
      color #ffffff
      background-color $color-theme-lg
    }
    .title {
      clear both
      font-size 22px
      color $color-text-black
      text-align center
    }
    .abstract {
      margin 26px
      color #ffffff
      line-height 1.8em
      font-size 18px
      wrap-n-text(4)
    }
  }
  .operator {
    display flex
    justify-content space-between
    font-size 16px
    background-color #ffffff
    border-radius 8px
    box-shadow 0 6px 6px #ddd
    padding 16px 26px
    color $color-sub-theme
    text-shadow 0 0 6px color-sub-theme-rgba(0.3)
    margin-top 8px
    .view-comment, .review-homework {
      hover-move-right()
    }
  }
}
</style>
