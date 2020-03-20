<template>
  <div class="week-tab">
      <div class="course-main-tab-header">
        <div
          :class="tabHeaderClassObj(idx)"
          v-for="(item, idx) in 6"
          :key="idx"
          @click="activeTab(idx)"
        >
          <span class="tab-link">第一周</span>
        </div>
    </div>
    <div class="course-main-tab-body">
      <router-link
        class="music-item"
        v-for="(item, idx) in 6"
        :key="idx"
        to="/online"
        tag="div"
      >
        <span class="music-item-link">作品作品作品作品作品作品作品作品作品</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActiveIdx: 1,
      tabHeaderClassObj(idx) {
        return {
          'tab-item': true,
          'active': this.tabActiveIdx === idx
        }
      }
    }
  },
  methods: {
    activeTab(idx) {
      this.tabActiveIdx = idx
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.week-tab {
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
      &.active {
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
    width 60%
    .music-item {
        display flex
        justify-content space-between
        text-align left
        width 100%
        font-size 14px
        padding 5px 15px
        line-height 1.8em
        border-radius 8px
        background-color $color-theme-d
        cursor pointer
        margin-bottom 10px
        &:hover {
          background-color #829e9a
          color white
          transition all 0.5s ease
        }
        &>span {
          no-wrap()
        }
        .left {
          .duration {
            font-size 12px
          }
        }
        .right {
          font-size 18px
        }

    }
  }
}
</style>
