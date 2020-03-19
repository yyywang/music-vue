<template>
  <!-- S=课程页 -->
  <div class="layout-heart">
    <m-modal :detailShow="showRequirement" :title="title" :content="requirement"></m-modal>
    <nav-path :navPaths="navPaths" class="margin-bottom-lg margin-top-sm"></nav-path>
    <div class="course-detail">
      <div class="course-header">
        <div class="course-cover">
          <img src alt="封面图" />
        </div>
        <div class="course-requirement">
          <div class="header">
            <span class="title">{{title}}</span>
            <!-- S=数据统计 -->
            <div class="statistics">
              <div class="view-num">
                <i class="icon-eye_open"></i>
                <span>1334</span>
              </div>
              <div class="like-num">
                <i class="icon-_334"></i>
                <span>222</span>
              </div>
              <div class="collect-num">
                <i class="icon-heart"></i>
                <span>221</span>
              </div>
              <div class="comment-num">
                <i class="icon-comment"></i>
                <span>32</span>
              </div>
            </div>
            <!-- E=数据统计 -->
          </div>
          <div class="body">
            {{requirement}}
          </div>
          <div class="footer">
            <span class="show-all" @click="showRequirementModal">查看全部</span>
          </div>
        </div>
      </div>
      <div class="course-body margin-top-lg">
        <m-tab-body :tabHeaders="tabHeaders"></m-tab-body>
      </div>
    </div>
  </div>
  <!-- E=课程页 -->
</template>

<script>
import NavPath from 'components/nav-path/nav-path'
import MTabBody from 'components/m-tab-body/m-tab-body'
import MModal from 'components/m-modal/m-modal'

export default {
  data() {
    return {
      showRequirement: false,
      navPaths: [
        {
          name: '在线学习',
          path: { name: 'online' }
        },
        {
          name: '古典音乐欣赏',
          path: { name: 'courseDetail', params: { courseId: 1 } }
        }
      ],
      tabHeaders: [
        {
          name: '课程主页',
          path: { name: 'courseMain' }
        },
        {
          name: '课程介绍',
          path: { name: 'courseIntroduce' }
        },
        {
          name: '必下资源',
          path: { name: 'courseResource' }
        },
        {
          name: '课外欣赏',
          path: { name: 'courseOutClass' }
        },
        {
          name: '公开问答',
          path: { name: 'courseQuestion' }
        },
        {
          name: '写作业',
          path: { name: 'homeworkList' }
        }
      ],
      title: '古典音乐欣赏',
      // eslint-disable-next-line no-multi-str
      requirement: '1、请每位同学准备一本五线谱本,没有的同学可以在A4纸上自画五线谱。\
            2、每周的线上教学内容,要求在一周内学习完,并按要求完成作业在指定时间上传;超出规定学习及作业时间,在两周内完成的作为迟到2次处理;两周内没有完成线上学习的按旷课一次(4节)处理。\
            3、笔头作业用拍照的形式上传,口头作业用音频的形式上传,我会在线上批阅打分(逾期不候)。\
            4、系统将自动记录大家的学习时间,每一次的线上学习、作业、互动等都将按比例记录\
            4、系统将自动记录大家的学习时间,每一次的线上学习、作业、互动等都将按比例记录\
            4、系统将自动记录大家的学习时间,每一次的线上学习、作业、互动等都将按比例记录'
    }
  },
  components: {
    NavPath,
    MTabBody,
    MModal
  },
  methods: {
    showRequirementModal() {
      this.showRequirement = true
    },
    hideRequirementModal() {
      this.showRequirement = false
    }
  },
  // provide 属性暴露给后代组件都可使用的方法
  provide() {
    return {
      hideRequirementModal: this.hideRequirementModal
    }
  }
}
</script>

<style lang='stylus'>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.course-detail {
  .course-header {
    display flex
    justify-content space-between
    width 100%
    .course-cover {
      width 440px
      height 260px
      border-radius 8px
      overflow hidden
      background-color #000000
    }
    .course-requirement {
      display flex
      flex-direction column
      justify-content space-between
      width 754px
      background-color #ffffff
      box-sizing border-box
      border-radius 8px
      padding 30px
      .header {
        display flex
        justify-content space-between
        .title {
          font-size 24px
          color $color-text-black
          text-shadow 0 0 6px rgba(0, 0, 0, 0.1)
        }
        .statistics {
          display flex
          justify-content space-between
          align-items center
          color #808080
          &>div {
            margin-left 20px
          }
        }
      }
      .body {
        line-height 1.8em
        font-size 14px
        margin-top 10px
        margin-bottom 10px
        wrap-n-text(5)
        color #808080
      }
      .footer {
        text-align right
        .show-all {
          color $color-theme
          font-size 16px
          hover-move-right()
        }
      }
    }
  }
}
</style>
