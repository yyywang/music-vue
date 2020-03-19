<template>
  <div class="layout-heart">
    <nav-path :navPaths="navs" class="margin-bottom-sm"></nav-path>
    <div v-if="homeworks.items.length > 0" class="homework-list">
      <div class="homework-card-container" v-for="(item, idx) in 6" :key="idx">
        <homework-card></homework-card>
      </div>
    </div>
    <div v-else>
      <div class="no-homework">
        <div class="tip-text">
          <div class="first-line">老师还没布置作业呢</div>
          <div class="second-line padding-tb-lg">你可以：</div>
        </div>
        <div class="operator">
          <div class="op-online">
            <div class="label">欣赏课程作品：</div>
            <router-link tag="div" :to="{name:'online'}" class="link">在线学习</router-link>
          </div>
          <div class="op-recommend">
            <div class="label">听听同学推荐的音乐：</div>
            <router-link tag="div" :to="{name:'recommend'}" class="link">美音推荐</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeworkCard from 'components/homework-card/homework-card'
import NavPath from 'components/nav-path/nav-path'

export default {
  data() {
    return {
      navs: [
        {
          name: '在线学习',
          path: '/online'
        },
        {
          name: '古典音乐赏析',
          path: '/c'
        },
        {
          name: '写作业',
          path: '/homework'
        }
      ],
      homeworks: {
        items: [
          {
            id: 1,
            title: '作业1',
            abstract: '作业简介'
          },
          {
            id: 2,
            title: '作业1',
            abstract: '作业简介'
          },
          {
            id: 3,
            title: '作业1',
            abstract: '作业简介'
          }
        ]
      }
    }
  },
  components: {
    HomeworkCard,
    NavPath
  }
}
</script>

<style lang='stylus'>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.homework-list {
  display flex
  justify-content space-between
  flex-wrap wrap
  .homework-card-container {
    box-sizing border-box
    width 32%
  }
}
.no-homework {
  width 350px
  font-size 18px
  margin 0 auto
  margin-top 18%
  margin-bottom 10%
  color $color-theme
  .tip-text {
    .first-line {
      font-size 38px
    }
    .second-line {
      font-size 22px
      text-align center
    }
  }
  .operator {
    .op-online {
      display flex
      justify-content space-between
      margin-bottom 10px
    }
    .op-recommend {
      display flex
      justify-content space-between
    }
    .link {
      color $color-sub-theme
      hover-move-right()
    }
  }
}
</style>
