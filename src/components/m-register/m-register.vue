<template>
  <div class="m-register">
    <el-form
      :model="registerForm"
      :rules="registerRules"
      ref="registerForm"
      label-width="100px"
      class="form-bg-panel"
    >
      <div class="form-title">
        <h2>注 册</h2>
      </div>
      <el-form-item label="昵称" prop="nickname" size="large">
        <el-input v-model="registerForm.nickname" placeholder="请输入昵称" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="realname" size="large">
        <el-input v-model="registerForm.realname" placeholder="请输入真实姓名" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender" size="mini">
        <el-radio-group v-model="registerForm.gender" fill="#829E9A">
          <el-radio label="1">男</el-radio>
          <el-radio label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="学号" prop="stu_id" size="large">
        <el-input v-model="registerForm.stu_id" placeholder="请输入学号" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="account" size="large">
        <el-input v-model="registerForm.account" placeholder="请输入邮箱" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="secret" size="large">
        <el-input v-model="registerForm.secret" placeholder="请输入密码" size="medium" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="re_secret" size="large">
        <el-input v-model="registerForm.re_secret" placeholder="请再次输入密码" size="medium" show-password></el-input>
      </el-form-item>
      <el-form-item class="content-right">
        <el-link class="login-link">
          <router-link to="/login">已注册？登录</router-link>
        </el-link>
      </el-form-item>
      <div class="text-center">
        <button class="btn-info btn-lg" @click="register">提交</button>
      </div>
    </el-form>
  </div>
</template>

<script>
import client from '@/models/client'
// import { getCourses } from '@/api/online'

export default {
  data() {
    // 校验学号
    var validateStuId = (rule, value, callback) => {
      const stuYear = parseInt(value.toString().slice(0, 4))
      const nowYear = new Date().getFullYear()
      const isDigit = /^\d+$/.test(value)

      if (value === '') {
        callback(new Error('请输入学号'))
      // 学号必须为纯数字
      } else if (!isDigit) {
        callback(new Error('学号非法'))
      // 学号中年份不能大于当前年份
      } else if (stuYear > nowYear) {
        callback(new Error('学号非法'))
      } else if (value.length !== 13) {
        callback(new Error('学号非法'))
      } else {
        callback()
      }
    }
    // 校验密码
    var validateSecret = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerForm.re_secret !== '') {
          this.$refs.registerForm.validateField('re_secret')
        }
        callback()
      }
    }
    // 再次校验密码
    var validateReSecret = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.secret) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        nickname: '怀月',
        realname: '11',
        gender: '1',
        stu_id: '2016329621072',
        account: 'ywang_perfect@163.com', // account === email
        secret: '123456',
        re_secret: '123456',
        type: 100
      },
      registerRules: {
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 32, message: '长度在2~32个字符之间', trigger: 'blur' }
        ],
        realname: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 32, message: '长度在2~32个字符之间', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: ['blur', 'change'] },
        ],
        stu_id: [
          { required: true, message: '请输入学号', trigger: 'blur' },
          { validator: validateStuId, trigger: 'blur' },
        ],
        account: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        secret: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码最少为6个字符', trigger: ['blur', 'change'] },
          { max: 100, message: '密码最长为100个字符', trigger: ['blur', 'change'] },
          { validator: validateSecret, trigger: 'blur' }
        ],
        re_secret: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 6, message: '密码最少为6个字符', trigger: ['blur', 'change'] },
          { max: 100, message: '密码最长为100个字符', trigger: ['blur', 'change'] },
          { validator: validateReSecret, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async register() {
      if (this.validateRegisterForm()) {
        try {
          this.loading = true
          const res = await client.register(this.registerForm)
          console.log(res)
          if (res.code === 20000) {
            this.$message.error(res.message)
          } else if (res.code === 0) {
            this.$message.success(res.message)
          // this.$router.push({path: '/'})
          }
          
        } catch (e) {
          // if (e.data.error_code === 10030) {
          //   this.$message.error(e.data.msg)
          // }
          console.log(e)
        } finally {
          this.loading = false
        }
      }
    },
    validateRegisterForm() {
      let returned = false
      this.$refs['registerForm'].validate(valid => {
        if (valid) {
          returned = true
        }
      })

      return returned
    }
  }
}
</script>

<style lang='stylus'>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'

.m-register {
  .el-form-item__label {
    font-size 18px
    color #829E9A
  }
  .el-radio__input.is-checked .el-radio__inner {
    background-color #829E9A
    border-color #829E9A
  }
  .el-radio__input.is-checked+.el-radio__label {
    color #829E9A
  }
  .el-radio__inner {
    width 18px
    height 18px
  }
  .el-radio__label {
    font-size 18px
  }
  .el-radio__inner::after {
    width 8px
    height 8px
  }
  .content-right {
    text-align right
  }
  .login-link:hover {
    color $color-sub-theme
    &:after {
      border-color $color-sub-theme
    }
  }
  .btn-theme {
    color $color-sub-theme
  }
}
</style>
