<template>
  <div class="out-class-music-card margin-bottom-lg">
    <div class="cover">
      <img src="" :alt="title">
    </div>
    <div class="des">
      <div class="title margin-bottom-sm">{{title}}</div>
      <div class="composer">作曲: {{composer}}</div>
      <div class="performer">
        <span class="performer-inner">演奏: {{performer}}</span>
        <span class="view-num">
          <i class="icon-eye_open"></i>
          <span class="num">1334</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cover_url: String,
    title: String,
    composer: String,
    performer: String,
    view_num: Number
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.out-class-music-card {
  min-width 380px
  min-height 280px
  hover-scale()
  .cover {
    min-height 200px
    background-color #000000
    border-top-left-radius 8px
    border-top-right-radius 8px
    overflow hidden
  }
  .des {
    background-color #ffffff
    border-bottom-left-radius 8px
    border-bottom-right-radius 8px
    padding 10px 20px
    color $color-text-black
    .title {
      font-size 18px
      no-wrap()
    }
    .composer,.performer {
      font-size 14px
      line-height 1.6em
    }
    .performer {
      display flex
      justify-content space-between
    }
  }
}
</style>
