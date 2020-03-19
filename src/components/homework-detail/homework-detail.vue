<template>
  <div class="layout-heart">
    <nav-path :navPaths="navPaths" class="margin-bottom-md margin-top-sm"></nav-path>
    <div class="homework-detail">
      <div class="des">
        <div class="title">第一次作业</div>
        <div class="divider-bold"></div>
        <div class="content">
          1、请结合电子版教材学习96-105页内容；也可以选择《基础乐理知识》教材中相对应的内容学习。教学视频是根据《李重光》教材讲解的，但《基础乐理知识》的内容更加易懂，可以两册教材对照使用。
          2、了解调、调式的概念、性质、分类等；
          3、认识五声调式；
          4、掌握大小调式：自然大调、自然小调、和声小调、旋律小调。
        </div>
      </div>
      <div class="operator">
        <div class="title">作业内容</div>
        <div class="score-container">
          <div class="score-inner">
            <!-- S=分数 -->
            <div class="score">
              <span>本次得分:</span>
              <span>93分</span>
            </div>
            <!-- E=分数 -->
          </div>
          <div class="divider-bold"></div>
        </div>
        <!-- S=已提交文件列表 -->
        <div class="submitted-homeworks">
          <div class="submitted-homework-item" v-for="(item, idx) in 6" :key="idx">
            <div class="left">
              <span class="index">{{idx+1}}.</span>
              <span class="filename">听歌练习听歌练习听歌练习听歌练习听歌练习</span>
              <span class="size">4.05M</span>
            </div>
            <div class="right">
              <span class="delete">删除</span>
              <i class="icon-download_alt"></i>
            </div>
          </div>
          <div class="file-operator">
            <div class="upload-file">
              <button class="btn-info">上传作业</button>
            </div>
            <div class="save">
              <button class="btn-info" disabled>保存</button>
            </div>
          </div>
        </div>
        <!-- E=已提交文件列表 -->
        <!-- S=评论列表 -->
        <div class="comment-container" v-for="(item, idx) in 2" :key="idx">
          <div class="divider-bold"></div>
          <div class="comment">
            <div class="header">
              <span class="author">郑老师</span>
              <span class="datetime">2020/10/10 21:00</span>
            </div>
            <div class="content">做得好，你对音乐高潮部分的理解出于我的意料，作业可以再从层次感方面进行补充。</div>
          </div>
        </div>
        <!-- E=评论列表 -->
        <div class="comment-input-container">
          <div class="divider-bold"></div>
          <div class="comment-input">
            <textarea name id cols="30" rows="10"></textarea>
            <button>回复老师</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavPath from 'components/nav-path/nav-path'

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
          name: '写作业',
          path: { name: 'homeworkList' }
        },
        {
          name: '写作业详情',
          path: {
            name: 'homeworkDetail',
            params: { courseId: 1, homeworkId: 1 }
          }
        }
      ]
    }
  },
  components: {
    NavPath
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.homework-detail {
  display flex
  justify-content space-between
  .des {
    width 65%
    background-color #ffffff
    border-radius 8px
    border 1px solid $color-theme
    box-sizing border-box
    padding 30px
    color $color-text
    .title {
      font-size 22px
      margin-bottom 20px
      text-align center
    }
    .content {
      margin-top 30px
      font-size 18px
      line-height 1.6em
    }
  }
  .operator {
    position relative
    width 32%
    padding 20px
    box-sizing border-box
    background-color #ffffff
    border-radius 8px
    border 1px solid $color-theme
    .score-container {
      padding-left 10px
      padding-right 10px
      .score-inner {
        display flex
        justify-content space-between
        .score {
          font-size 18px
          color #B30000
        }
      }
      .divider-bold {
        margin 15px 0
      }
    }
    .title {
      position absolute
      top -30px
      left 0
      text-shadow 0 0 6px color-sub-theme-rgba(0.3)
      color $color-text-black
    }
    .submitted-homeworks {
      .submitted-homework-item {
        display flex
        justify-content space-between
        padding 2px 10px
        color $color-text
        font-size 16px
        line-height 1.4em
        .left {
          max-width 80%
          no-wrap()
        }
        .right {
          .delete {
            hover-move-right()
          }
          .icon-download_alt {
            margin-left 10px
            hover-move-right()
          }
        }
      }
      .file-operator {
        display flex
        margin-top 10px
        color $color-sub-theme
        justify-content space-around
      }
    }
    .comment-container {
      .divider-bold {
        margin 15px 0
      }
      .comment {
        padding-left 10px
        padding-right 10px
        font-size 16px
        .header {
          display flex
          justify-content space-between
          padding 5px 0
          no-wrap()
        }
        .content {
          line-height 1.4em
          padding 5px 0
        }
      }
    }
    .comment-input-container {
      .divider-bold {
        margin 15px 0
      }
      .comment-input {
        display flex
        justify-content space-between
        height 65px
        textarea {
          width 100%
          font-size 12px
          padding 5px 10px
          border-radius 8px
          outline none
        }
        button {
          font-size 14px
          margin-left 10px
          background-color $color-theme
          color #ffffff
          border-radius 8px
          border none
          padding-left 15px
          padding-right 15px
          cursor pointer
          transition all 0.1s ease
          &:hover {
            background-color $color-theme-md
            transition all 0.1s ease
          }
          click-down()
        }
      }
    }
  }
}
</style>
