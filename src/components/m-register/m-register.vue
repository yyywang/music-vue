<template>
  <div class="m-register">
    <div class="form-title">
      <h2>注册</h2>
    </div>
    <div class="form-group">
      <label for="nickname">昵称</label>
      <input type="text" name="nickname" id="nickname" />
    </div>
    <div class="form-group">
      <label for="realname">姓名</label>
      <input type="text" name="realname" id="realname" />
    </div>
    <div class="form-group gender">
      <label for>性别</label>
      <input type="radio" name="gender" id="male" value="1" />
      <label for="male">男</label>
      <input type="radio" name="gender" id="female" value="2" />
      <label for="female">女</label>
    </div>
    <div class="form-group">
      <label for="stu_id">学号</label>
      <input type="text" name="stu_id" id="stu_id" />
    </div>
    <div class="form-group">
      <label for="email">邮箱</label>
      <input type="text" name="email" id="email" />
    </div>
    <div class="form-group">
      <label for="secret">密码</label>
      <input type="password" name="secret" id="secret" />
    </div>
    <div class="form-group">
      <label for="re_secret">确认密码</label>
      <input type="password" name="re_secret" id="re_secret" />
    </div>
    <div class="to-login">
      <span>已注册？登录</span>
    </div>
    <div class="form-group center">
      <button class="btn-default">提交</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus'>
@import '~common/stylus/variable.styl'

.m-register {
  width 390px
  padding 30px 70px
  margin 0 auto
  margin-top 36px
  background-color #ffffff
  color $color-theme
  border-radius 8px
  .form-title {
    h2 {
      text-align center
      font-size $font-size-large-x
      margin-bottom 20px
    }
  }
  .form-group {
    height 40px
    vertical-align middle
    padding 10px 5px
    font-size $font-size-large
    label {
      display inline-block
      line-height 1.2em
      max-width 10%
      vertical-align middle
      margin-right 5%
      word-wrap break-word
      word-break break-all
    }
    input[type=text], input[type=password] {
      width 83%
      height 40px
      border 1px solid $color-theme
      border-radius 8px
    }
    input[type=radio] {
      appearance none
      width 22px
      height 22px
      background-color #ffffff
      vertical-align middle
      border 1px solid $color-theme
      border-radius 8px
      transition all 250ms ease
    }
    input[type=radio]:checked {
      background-color $color-theme
      box-shadow inset 0 0 0 4px #ffffff
    }
  }
  .gender {
    label {
      line-height 40px
    }
  }
  .to-login {
    text-align right
    padding 10px 5px
    color $color-sub-theme
    font-size $font-size-medium-x
  }
  .btn-default {
    background-color $color-theme-d
    color #4d4d4d
    border-radius 8px
    border none
    width 147px
    height 40px
    font-size $font-size-large
    margin 0 auto
  }
  .center {
    text-align center
  }

}
</style>
