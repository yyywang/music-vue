<template>
  <transition name="fade">
    <div v-show="detailShow" class="m-modal">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <div class="modal">
            <div class="title">推荐音乐</div>
            <div class="content">
              <div class="form-group">
                <label for="title">标题</label>
                <input type="text" name="title" id="title" />
              </div>
              <div class="form-group">
                <label for="content">内容</label>
                <input type="text" name="content" id="content" />
              </div>
              <!-- S=标签 -->
              <div class="form-group auto-height">
                <div class="label">标签</div>
                <div class="input-detail">
                  <span class="tag-add"><i class="icon-plus"></i></span>
                  <span class="tag-distract" v-for="(item, idx) in 19" :key="idx">憨憨</span>
                  <span v-if="!isTagSpread" class="tag-spread" @click="tagSpread"><i class="icon-double_angle_down"></i></span>
                  <span v-else class="tag-unspread" @click="tagUnspread"><i class="icon-double_angle_up"></i></span>
                </div>
              </div>
              <!-- E=标签 -->
              <!-- S=推荐链接 -->
              <div class="form-group auto-height">
                <label for class="long-label">音乐链接</label>
                <div class="link-list">
                  <div class="link-item" v-for="(item, idx) in linkItemArr" :key="linkItemArr[idx]">
                    <input
                      type="text"
                      :name="idx"
                      :id="idx"
                      placeholder="音乐作品的链接，例：https://www.bilibili.com/video/av96561262"
                    />
                    <span v-if="idx !== 0" class="delete" @click="deleteLinkItem(idx)">删除</span>
                    <span v-else class="create" @click="pushLinkItem">新增</span>
                  </div>
                </div>
              </div>
              <!-- E=推荐链接 -->
            </div>
            <div class="close-container clear text-center">
              <button class="btn-info btn-lg" @click="hideDetail">发布</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      linkItemArr: [0],
      isTagSpread: false
    }
  },
  methods: {
    showDetail() {
      this.detailShow = true
    },
    hideDetail() {
      this.hideCreateModal()
    },
    // 追加一条链接框
    pushLinkItem() {
      this.linkItemArr.push(this.linkItemArr.length)
    },
    // 删除索引为 idx 的链接框
    deleteLinkItem(idx) {
      this.linkItemArr.splice(idx, 1)
    },
    tagSpread() {
      this.isTagSpread = true
    },
    tagUnspread() {
      this.isTagSpread = false
    }
  },
  props: {
    detailShow: Boolean,
    title: String,
    content: String
  },
  // inject 属性接收祖先组件暴露的方法
  inject: ['hideCreateModal']
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
          text-align left
          font-size 24px
          margin-bottom 25px
        }
        .content {
          line-height 1.4em
          font-size 16px
          margin-top 20px
          margin-bottom 20px
          .form-group {
            .long-label {
              max-width 5%
            }
            .input-detail {
              display flex
              justify-content space-between
              flex-wrap wrap
              padding 0
              color $color-text
              [class^='tag-'] {
                width 10%
                margin-bottom 10px
                padding-top 6px
                padding-bottom 6px
                font-size 17px
                text-align center
              }
              .tag-add {
                color $color-theme
              }
            }
            .link-list {
              display flex
              flex-direction column
              width 90%
              .link-item {
                display flex
                flex-direction row
                justify-content space-between
                width 100%
                align-items center
                margin-bottom 10px
                .create {
                  font-size 14px
                  hover-move-right()
                }
                .delete {
                  font-size 14px
                  color red
                  hover-move-right()
                }
              }
            }
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
