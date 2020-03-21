<template>
  <div class="user-profile">
    <div class="info-item">
      <div class="label">
        <span class="des">昵称:</span>
      </div>
      <div class="detail">怀月</div>
    </div>
    <div class="info-item">
      <div class="label">
        <span class="des">姓名:</span>
      </div>
      <div class="detail">识欢</div>
    </div>
    <div class="info-item">
      <div class="label">
        <span class="des">性别:</span>
      </div>
      <div class="detail">男</div>
    </div>
    <div class="info-item">
      <div class="label">
        <span class="des">学号:</span>
      </div>
      <div class="detail">2016666666666</div>
    </div>
    <div class="info-item">
      <div class="label">
        <span class="des">邮箱:</span>
      </div>
      <div class="detail">aa@aa.com</div>
    </div>
    <div class="update-btn-container">
      <button class="btn-default">修改</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
@import '~common/stylus/variable'

.user-profile {
  &>.info-item {
    display flex
    align-items center
    margin 0 auto
    line-height 3em
    color $color-text
    &>.label {
      display flex
      flex-direction column
      width 100px
      font-size 18px
      text-align right
      padding-right 20px
    }
    &>.detail {
      width 700px
      font-size 16px
    }
  }
  &>.update-btn-container {
    margin-top 10px
    &>button {
      margin-left 55px
      font-size 16px
      height auto
      padding-top 5px
      padding-bottom 5px
    }
  }
}
</style>
