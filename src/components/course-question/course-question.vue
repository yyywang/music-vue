<template>
  <div class="layout-heart course-question">
    <create-question-modal :detailShow="createModalShow"></create-question-modal>
    <div class="header">
      <div class="left">
        <nav-path :navPaths="navPaths"></nav-path>
      </div>
      <div class="right">
        <router-link tag="div" :to="{ name: 'myRecommends' }">
          <span class="my-recommend">我的公开问答</span>
        </router-link>
      </div>
    </div>
    <div class="card-list">
      <div class="create-recommend" @click="showCreateModal">
        <i class="icon-plus"></i>
        <span class="des">发布我的问答</span>
      </div>
      <div class="card-container" v-for="(item, idx) in 50 " :key="idx">
        <question-card></question-card>
      </div>
    </div>
  </div>
</template>

<script>
import NavPath from 'components/nav-path/nav-path'
import QuestionCard from 'components/question-card/question-card'
import CreateQuestionModal from 'components/create-question-modal/create-question-modal'

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
        }
      ],
      createModalShow: false // 控制创建推荐的模态框显隐
    }
  },
  components: {
    NavPath,
    QuestionCard,
    CreateQuestionModal
  },
  methods: {
    showCreateModal() {
      this.createModalShow = true
    },
    hideCreateModal() {
      this.createModalShow = false
    }
  },
  provide() {
    return {
      hideCreateModal: this.hideCreateModal
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.course-question {
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
      .my-recommend {
        color $color-sub-theme
      }
    }
  }
  .card-list {
    display flex
    justify-content space-between
    flex-wrap wrap
    width 100%
    .create-recommend, .card-container {
      width 32%
      box-sizing border-box
      margin-top 20px
    }
    .create-recommend {
      display flex
      flex-direction column
      justify-content center
      align-items center
      background-color #ffffff
      border-radius 8px
      .icon-plus {
        font-size 100px
        color $color-theme-lg
      }
      .des {
        margin-top 10px
        font-size 22px
        color $color-theme
      }
      hover-scale()
    }
  }
}
</style>
