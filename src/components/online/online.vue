<template>
  <div class="online">
    <div class="courses">
      <div class="title">
        <h1>全部课程</h1>
        <div class="icon-arrow">
          <i class="icon-double_angle_right"></i>
        </div>
      </div>
      <div class="content">
        <div class="course-card-container" v-for="(item,idx) in courses" :key="idx" >
          <course-card v-bind="item"></course-card>
        </div>
      </div>
    </div>
    <div class="latest-recommend">
      <div class="title">
        <h1>ta 的热推</h1>
        <div class="icon-arrow">
          <i class="icon-double_angle_right"></i>
        </div>
      </div>
      <div class="content">
        <div class="recommend-card-container" v-for="(item, idx) in 3" :key="idx">
          <recommend-card-online v-bind="hotRecommends"></recommend-card-online>
        </div>
      </div>
      <div class="footer">
        <img src="./phonograph.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from 'components/course-card/course-card'
import RecommendCardOnline from 'components/recommend-card-online/recommend-card-online'
import course from '@/models/course'

export default {
  data() {
    return {
      courses: [], // 课程
      hotRecommends: [] // 最新推荐
    }
  },
  components: {
    CourseCard,
    RecommendCardOnline
  },
  created() {
    this.setCoursesData()
  },
  methods: {
    async setCoursesData() {
      this.courses = await course.getCourses()
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin'

.online {
  display flex
  justify-content space-between
  width 1200px
  margin 0 auto
  margin-top 30px
  .courses {
    width 75%
    box-sizing border-box
    padding 0 10px
    .title {
      display inline-block
      width 100%
      font-size $font-size-large
      h1 {
        display inline-block
        padding 5px 0
        color #1E1C1D
      }
      .icon-arrow {
        display inline-block
        font-size 22px
        float right
        color $color-theme
        hover-move-right()
      }
    }
    .content {
      display flex
      justify-content space-between
      flex-wrap wrap
      .course-card-container {
        box-sizing border-box
        width 32%
        padding 10px 0
      }
    }
  }
  .latest-recommend {
    float right
    width 25%
    box-sizing border-box
    padding 0 10px
    .title {
      display inline-block
      width 100%
      margin-bottom 10px
      font-size $font-size-large
      h1 {
        display inline-block
        padding 5px 0
        color #1E1C1D
      }
      .icon-arrow {
        display inline-block
        font-size 22px
        float right
        color $color-theme
        hover-move-right()
      }
    }
    .content {
      .recommend-card-container {
        margin-bottom 10px
      }
    }
    .footer {
      text-align right
    }
  }
}
</style>
