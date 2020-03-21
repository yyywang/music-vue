<template>
  <div class="layout-heart course-question-my">
    <div class="header">
      <div class="left">
        <nav-path :navPaths="navPaths"></nav-path>
      </div>
    </div>
    <div class="card-list">
      <div class="card-container" v-for="(item, idx) in 50 " :key="idx">
        <question-card></question-card>
      </div>
    </div>
  </div>
</template>

<script>
import NavPath from 'components/nav-path/nav-path'
import QuestionCard from 'components/question-card/question-card'

export default {
  data() {
    return {
      navPaths: [
        {
          name: '在线学习',
          path: { name: 'online' }
        },
        {
          name: '古典音乐赏析',
          path: { name: 'courseDetail', params: { courseId: 1 } }
        },
        {
          name: '公开问答',
          path: { name: 'courseQuestion' }
        },
        {
          name: '我的问答',
          path: { name: 'courseQuestionMy' }
        }
      ]
    }
  },
  components: {
    NavPath,
    QuestionCard
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.course-question-my {
  &>.header {
    display flex
    align-items center
    justify-content space-between
    .left {
      display flex
      align-items center
      .tag-picker {
        width 120px
        font-size 13px
        border 1px solid #ffffff
        padding 5px 10px
        outline none
        border-radius 4px
        margin-left 20px
        &:focus {
          border 1px solid $color-theme-md
        }
      }
    }
    .right {
      hover-move-right()
      text-shadow-theme()
    }
  }
  .card-list {
    display flex
    justify-content space-between
    flex-wrap wrap
    width 100%
    .card-container {
      width 32%
      box-sizing border-box
      margin-top 20px
    }
  }
}
</style>
