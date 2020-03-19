<template>
  <transition name="fade">
    <div v-show="detailShow" class="m-modal">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <div class="modal">
            <div class="title">{{title}}</div>
            <div class="divider"></div>
            <div class="content">{{content}}</div>
            <div class="close-container clear text-center">
              <button class="btn-default close" @click="hideDetail">关闭</button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="detail-close" @click="hideDetail">
      <button class="btn-default">关闭</button>
      </div>-->
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    showDetail() {
      this.detailShow = true
    },
    hideDetail() {
      // this.detailShow = false
      this.hideRequirementModal()
    }
  },
  props: {
    detailShow: Boolean,
    title: String,
    content: String
  },
  // inject 属性接收祖先组件暴露的方法
  inject: ['hideRequirementModal']
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
        width 800px
        margin 0 auto
        padding 30px 60px
        background-color #ffffff
        border-radius 8px
        .title {
          color #000000
          text-align center
          font-size 24px
          margin-bottom 25px
        }
        .divider {
          height 5px
          background-color $color-theme-d
        }
        .content {
          line-height 1.4em
          font-size 16px
          margin-top 20px
          margin-bottom 20px
          color #4d4d4d
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
