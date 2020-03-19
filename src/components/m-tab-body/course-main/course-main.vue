<template>
  <div class="course-main">
    <div class="course-main-tab-header">
      <router-link
        class="tab-item"
        tag="div"
        v-for="(item, idx) in navPaths"
        :key="idx"
        :to="item.path"
      >
        <span class="tab-link">{{item.name}}</span>
      </router-link>
    </div>
    <div class="course-main-tab-body">
      <router-view :musics="musics"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 每周导航列表
      navPaths: [
        {
          name: '第一周',
          path: { name: 'courseMainWeek', params: { courseId: 1, weekNum: 1 } }
        },
        {
          name: '第二周',
          path: { name: 'courseMainWeek', params: { courseId: 1, weekNum: 2 } }
        }
      ],
      // 作品列表
      musics: [
        {
          title: 'G弦上的咏叹调',
          composer: '巴赫',
          performer: '萨拉张',
          duration: 6000,
          statistics: {
            view_num: 10,
            like_num: 10,
            comment_num: 10,
            fav_num: 10
          }
        },
        {
          title: 'G弦上的咏叹调',
          composer: '巴赫',
          performer: '萨拉张',
          duration: 6000,
          statistics: {
            view_num: 10,
            like_num: 10,
            comment_num: 10,
            fav_num: 10
          }
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'

.course-main {
  display flex
  .course-main-tab-header {
    display flex
    flex-direction column
    margin-left -15px
    min-width 100px
    .tab-item {
      height 17px
      width 48px
      padding 10px 15px
      color #ffffff
      background-color $color-theme-md
      border-top-right-radius 8px
      border-bottom-right-radius 8px
      margin-bottom 5px
      &.router-link-active {
        background-color $color-theme
      }
      cursor pointer
      transition all 0.5s cubic-bezier(0.25,0.1,0.25,1)
      &:hover {
        width 54px
        transition all 0.5s cubic-bezier(0.25,0.1,0.25,1)
      }
    }
  }
  .course-main-tab-body {
    width 100%
  }
}
</style>
