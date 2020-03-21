<template>
  <div class="question-card">
    <div class="content">
      <div class="title">G弦上的咏叹调</div>
      <div class="abstract">摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要要摘要摘要摘要摘要摘要摘要摘要要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要</div>
      <div class="info">
        <div class="author">By 16怀月</div>
        <div class="datetime">昨天</div>
      </div>
    </div>
    <div class="operator">
      <div class="statistics">
        <div class="like-num">
          <i class="icon-_334"></i>
          <span>222</span>
        </div>
        <div class="comment-num">
          <i class="icon-comment"></i>
          <span>221</span>
        </div>
      </div>
      <div class="more">···</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.question-card {
  hover-scale()
  .content{
    background-color $color-theme-md
    border-radius 8px
    padding 0 20px 10px 20px
    color #ffffff
    .title {
      color $color-text
      font-size 18px
      padding-top 30px
      margin-bottom 10px
    }
    .abstract {
      font-size 15px
      line-height 1.4em
      wrap-n-text(3)
    }
    .info {
      display flex
      justify-content space-between
      font-size 14px
      padding 20px 0 10px 0
    }
  }
  &>.operator {
    display flex
    justify-content space-between
    box-sizing border-box
    padding 15px 20px
    margin-top 10px
    background-color #ffffff
    border-radius 8px
    .statistics {
      display flex
      align-items center
      &>div {
        margin-right 20px
      }
    }
    .more {
      font-weight bold
    }
  }
}
</style>
