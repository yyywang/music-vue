<template>
  <transition name="fade">
    <div v-show="detailShow" class="m-modal">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <div class="modal">
            <div class="title">{{title}}</div>
            <div class="content">{{content}}</div>
            <div class="btn-container text-center">
              <button class="btn-default confirm" @click="confirmCallback">确认</button>
              <button class="btn-default cancel" @click="cancelCallback">取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    detailShow: Boolean,
    confirmCallback: Function,
    cancelCallback: Function,
    title: String,
    content: String
  },
  // inject 属性接收祖先组件暴露的方法
  inject: ['hideJoinClassModal']
}
</script>

<style lang='stylus'>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.m-modal {
  position fixed
  z-index 100
  top 0
  left 0
  width 100%
  height 100%
  overflow auto
  opacity 1
  background rgba(7, 17, 27, 0.8)
  backdrop-filter blur(10px)
  &.fade-enter, &.fade-leave-to {
    opacity 0
    background rgba(7, 17, 27, 0)
  }
  &.fade-enter-active, &.fade-leave-active {
    transition all 0.5s
  }
  .detail-wrapper {
    min-height 100%
    width 100%
    .detail-main {
      margin-top 64px
      padding-bottom 64px
      .modal {
        position relative
        width 800px
        margin 0 auto
        padding 30px 60px
        background-color #ffffff
        border-radius 8px
        .close {
          position absolute
          top 30px
          right 60px
          font-size 18px
          hover-rotate()
        }
        .title {
          color #000000
          text-align center
          font-size 24px
          margin-bottom 25px
        }
        .content {
          line-height 1.4em
          font-size 16px
          margin-top 20px
          margin-bottom 20px
          text-align center
        }
        &>.btn-container {
          &>.confirm {
            margin-right 30px
          }
        }
      }
    }
  }
  .clearfix {
    display inline-block
    &:after {
      display block
      content '.'
      height 0
      line-height 0
      clear both
      visibility hidden
    }
  }
  .detail-close {
    position relative
    width 32px
    height 32px
    margin -64px auto 0 auto
    clear both
    font-size 32px
  }
}
</style>
