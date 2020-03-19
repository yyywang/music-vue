<template>
  <transition name="fade">
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <div class="modal">
            <div class="title">公告</div>
            <div class="divider"></div>
            <div class="content">今天推荐的音乐</div>
            <div class="recommend-addr">
              <div class="title">推荐链接：</div>
              <div class="urls">
                <a href="http://www.baidu.com" target="_blank">http://www.baidu.com</a>
                <a href="http://www.baidu.com" target="_blank">http://www.baidu.com</a>
              </div>
            </div>
            <div class="push-info margin-top-md margin-bottom-lg">
              <div class="author inline-block">郑老师</div>
              <div class="push-datetime inline-block">2020/03/19 12:00</div>
            </div>
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
  data() {
    return {
      detailShow: true
    }
  },
  methods: {
    showDetail() {
      this.detailShow = true
    },
    hideDetail() {
      this.detailShow = false
    }
  }
}
</script>

<style lang='stylus'>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.detail {
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
          font-size 16px
          margin-top 20px
          margin-bottom 20px
          color #4d4d4d
        }
        .recommend-addr {
          display flex
          font-size 18px
          .title {
            font-size 18px
          }
          .urls {
            display flex
            flex-direction column
            a {
              line-height 1.5em
              color #1F7CBF
              no-wrap()
              hover-move-right()
            }
          }
        }
        .push-info {
          float right
          color #4d4d4d
        }
        .close {
          margin 0 auto
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
