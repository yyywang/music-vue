<template>
  <div class="online">
    <div class="courses">
      <div class="title">
        <h1>全部课程</h1>
        <div class="icon-arrow">>></div>
      </div>
      <div class="content">
        <div class="course-card-container" v-for="(item,idx) in 6" :key="idx" >
          <course-card v-bind="courses"></course-card>
        </div>
      </div>
    </div>
    <div class="latest-recommend">
      <div class="title">
        <h1>最新推荐</h1>
        <div class="icon-arrow">>></div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from 'components/course-card/course-card'
import { getCourses } from 'api/online'
import config from 'api/config'

const ERR_OK = config.ERR_OK

export default {
  data() {
    return {
      courses: []
    }
  },
  components: {
    CourseCard
  },
  created() {
    this._getCoursesData()
  },
  methods: {
    _getCoursesData() {
      getCourses().then(res => {
        if (res.data.error_code === ERR_OK) {
          this.courses = res.data.data.items
        }
      })
    }
  }
}
</script>

<style lang='stylus'>
@import '~common/stylus/variable.styl'

.online {
  width 80%
  background-color #fff
  margin 0 auto
  margin-top 30px
  .courses {
    float left
    width 70%
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
        float right
        color $color-theme
      }
    }
    .content {
      .course-card-container {
        float left
        box-sizing border-box
        width 33.33%
        padding 14px 10px
      }
    }
  }
  .latest-recommend {
    float right
    width 30%
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
        float right
        color $color-theme
      }
    }
  }
}
</style>
