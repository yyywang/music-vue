<template>
  <div class="layout-heart">
    <nav-path :navPaths="navPaths" class="margin-bottom-md"></nav-path>
    <div class="music-detail">
      <div class="left">
        <div class="header">
          <div class="video-container">视频播放器</div>
          <div class="des">
            <div class="title">《G弦上的咏叹调》小提琴版 By 作曲：巴赫 演奏：莎拉张</div>
            <div class="introduce">
              <div :class="{ 'spread':isSpread, 'unspread': !isSpread, 'info':true }">
                视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍。
                视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍。
              </div>
              <div class="operator-spread text-right">
                <i
                  :class="{ 'spread':isSpread, 'unspread': !isSpread, 'icon-double_angle_right':true }"
                  @click="spreadAbstractOrNot"
                >
                </i>
              </div>
            </div>
            <div class="stastics">
              <div class="view-num">
                <i class="icon-eye_open"></i>
                <span>222</span>
              </div>
              <div class="like-num">
                <i class="icon-_334"></i>
                <span>222</span>
              </div>
              <div class="collect-num">
                <i class="icon-star"></i>
                <span>222</span>
              </div>
              <div class="comment-num">
                <i class="icon-comment"></i>
                <span>223</span>
              </div>
            </div>
          </div>
        </div>
        <div class="body margin-tb-lg">
          <input class="comment-input" type="text" name="" id="" placeholder="写下你的想法吧">
          <button class="btn-info">发表评论</button>
        </div>
        <div class="footer margin-bottom-lg">
          <!-- S=评论列表 -->
          <div class="comment-item" v-for="(item, idx) in 3" :key="idx">
            <div class="comment-detail">
              <div class="header">
                <span class="author">罗松路</span>
                <span class="datetime">2020/10/10 20:00</span>
              </div>
              <div class="body">德国著名小提琴家威廉密于1817年将第一小提琴部分的曲调由D大调改为C大调，从而将旋律全部移至小提琴G弦上演奏，故名《G弦上的咏叹调。</div>
              <div class="footer">
                <span class="link-reply">回复</span>
              </div>
            </div>
            <div class="replies">
              <div class="divider"></div>
              <div class="header">
                <span class="author">罗松路</span>
                <span class="datetime">2020/10/10 20:00</span>
              </div>
              <div class="body">德国著名小提琴家威廉密于1817年将第一小提琴部分的曲调由D大调改为C大调，从而将旋律全部移至小提琴G弦上演奏，故名《G弦上的咏叹调。</div>
              <div class="footer">
                <div class="replies-num">
                  <span>共<span class="bold">5</span>条回复, </span><span class="view-replies">请点击查看</span>
                </div>
                <span class="link-reply">回复</span>
              </div>
            </div>
            <div v-if="idx !== 3-1" class="divider"></div>
          </div>
          <!-- E=评论列表 -->
          <!-- <div class="comment-input-container">
            <input class="comment-input" type="text" name="" id="" placeholder="写下你的想法吧">
            <button class="btn-info">发表评论</button>
          </div> -->
        </div>
      </div>
      <div class="right">
        <div class="title">课程列表</div>
        <div class="course-tab-container">
          <week-tab></week-tab>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavPath from 'components/nav-path/nav-path'
import WeekTab from 'components/week-tab/week-tab'

export default {
  data() {
    return {
      navPaths: [
        {
          name: '在线学习',
          path: { name: 'online' }
        },
        {
          name: '古典音乐欣赏',
          path: { name: 'courseDetail', params: { courseId: 1 } }
        },
        {
          name: '视频详情',
          path: { name: 'musicDetail', params: { weekNum: 1, musicId: 1 } }
        }
      ],
      isSpread: false // 作品介绍是否展开
    }
  },
  components: {
    NavPath,
    WeekTab
  },
  methods: {
    // 展开/收起作品简介
    spreadAbstractOrNot() {
      this.isSpread = !this.isSpread
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.music-detail {
  display flex
  justify-content space-between
  .left {
    width 800px
    .header {
      .video-container {
        height 460px
        background-color #000000
      }
      .des {
        padding 20px 15px
        background-color #ffffff
        border-bottom-left-radius 8px
        border-bottom-right-radius 8px
        .title {
          font-size 18px
        }
        .introduce {
          position relative
          line-height 1.4em
          margin-top 20px
          color $color-text
          .info {
            line-height 1.4em
            &.spread {
              min-height 3em
              height auto
            }
            &.unspread {
              height 3em
              overflow hidden
              text-overflow ellipsis
            }
          }
          .operator-spread {
            .icon-double_angle_right {
              hover-move-right()
            }
            .icon-double_angle_right:before {
              display inline-block
              color $color-sub-theme
            }
            .unspread:before {
              transform rotate(90deg)
            }
            .spread:before {
              transform rotate(-90deg)
            }
          }
        }
        .stastics {
          display flex
          align-items center
          margin-top 20px
          &>div {
            margin-right 20px
          }
        }
      }
    }
    .body {
      display flex
      justify-content space-between
      .comment-input {
        width 90%
        box-sizing border-box
        font-size 14px
        border-radius 4px
        padding 10px 10px
        &::-webkit-input-placeholder {
          font-size 14px
        }
      }
    }
    .footer {
      box-sizing border-box
      padding 20px 15px
      border-radius 8px
      background-color #ffffff
      .comment-item {
        .comment-detail {
          font-size 14px
          color $color-text
          .header {
            display flex
            justify-content space-between
            margin-bottom 20px
          }
          .body {
            line-height 1.4em
          }
          .footer {
            text-align right
            padding 0
            font-size 12px
            .link-reply {
              color $color-sub-theme
              hover-move-right()
            }
          }
        }
        .replies {
           padding-left 50px
          .header {
            display flex
            justify-content space-between
            margin-bottom 20px
          }
          .body {
            line-height 1.4em
            margin-bottom 20px
          }
          .footer {
            display flex
            justify-content space-between
            text-align right
            padding 0
            font-size 12px
            .link-reply {
              color $color-sub-theme
              hover-move-right()
            }
            .replies-num {
              .view-replies {
                color $color-sub-theme
                hover-move-right()
              }
            }
          }
        }
        .divider {
          margin 20px 0
        }
      }
      .comment-input-container {
        display flex
        justify-content space-between
        margin-top 30px
        .comment-input {
          width 90%
        }
      }

    }
  }
  .right {
    position relative
    width 380px
    box-sizing border-box
    background-color #ffffff
    border-radius 8px
    .title {
      position absolute
      top -30px
      text-shadow-theme()
    }
    .course-tab-container {
      padding 15px 15px
    }
  }
}
</style>
