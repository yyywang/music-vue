<template>
  <div class="course-card">
    <div class="cover">
      <img :src="cover_url" :alt="title">
    </div>
    <div class="introduce">
      <div class="title">{{title}}</div>
      <div class="abstract">{{introduce}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cover_url: String,
    title: String,
    introduce: String
  }
}
</script>

<style lang='stylus'>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'

.course-card {
  hover-scale()
  .cover {
    height 170px
    background-color #000000
    border-radius 8px
    img {
      max-width 100%
      height 100%
      border-radius 8px
    }
  }
  .introduce {
    background-color #ffffff
    border-radius 8px
    padding 10px 15px
    margin-top 4px
    .title {
      color #151618
      font-size $font-size-medium
      height 2em
      line-height 2em
      text-shadow 0 3px 3px rgba(0,0,0,0.2)
    }
    .abstract {
      font-size $font-size-small
      line-height 1.3em
      color #666666
      min-height 30px
      wrap-n-text(2)
    }
  }
}

</style>
