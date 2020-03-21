<template>
  <div class="m-register">
    <div class="form-bg-panel">
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
      <div class="form-group gender flex-start">
        <label for>性别</label>
        <input class="margin-right-sm" type="radio" name="gender" id="male" value="1" />
        <label for="male">男</label>
        <input class="margin-right-sm" type="radio" name="gender" id="female" value="2" />
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
        <router-link to="/login">已注册？登录</router-link>
      </div>
      <div class="form-group text-center">
        <button class="btn-default">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus'>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'

.m-register {
  .gender {
    label {
      line-height 40px
    }
  }
  .to-login {
    text-align right
    padding 10px 5px
    font-size $font-size-medium-x
    a {
      hover-move-right()
      color $color-sub-theme
    }
  }
}
</style>
