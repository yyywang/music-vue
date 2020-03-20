<template>
  <div class="week-musics">
    <div class="music-item" v-for="(item, idx) in musics" :key="idx">
      <div class="des">
        <div class="left">
          <span class="title">{{item.title}}</span>
          <span v-if="item.composer" class="composer">作曲:{{item.composer}}</span>
          <span v-if="item.performer" class="performer">演奏:{{item.performer}}</span>
          <span
            v-if="item.duration"
            class="duration"
          >
            {{ formatTwoNum(item.duration / 60) }}min{{ formatTwoNum(item.duration % 60) }}s
          </span>
        </div>
        <div class="right">
          <i class="icon-play"></i>
        </div>
      </div>
      <div class="statistics">
        <div class="like-num">
          <i class="icon-_334"></i>
          <span>222</span>
        </div>
        <div class="comment-num">
          <i class="icon-comment"></i>
          <span>32</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    musics: Array
  },
  methods: {
    // 将数字格式化为2位数
    formatTwoNum(num) {
      return num.toString().length < 2 ? '0' + num.toString() : num
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.week-musics {
  .music-item {
    display flex
    justify-content space-between
    align-items center
    box-sizing border-box
    width 100%
    padding 0 20px
    margin-bottom 10px
    text-align center
    color $color-text
    .des {
      display flex
      justify-content space-between
      text-align left
      width 100%
      font-size 14px
      padding 5px 30px
      line-height 1.8em
      border-radius 8px
      background-color $color-theme-d
      cursor pointer
      &:hover {
        background-color #829e9a
        color white
        transition all 0.5s ease
      }
      &>span {
        margin-left 10px
      }
      no-wrap()
      .left {
        .duration {
          font-size 12px
        }
      }
      .right {
        font-size 18px
      }
    }
    .statistics {
      display flex
      color #808080
      &>div {
        display flex
        margin-left 20px
        &>span {
          margin-left 5px
        }
      }
    }
  }
}
</style>
