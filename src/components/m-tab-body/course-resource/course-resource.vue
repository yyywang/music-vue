<template>
  <div class="course-resource">
    <div class="resource-item" v-for="(item, idx) in resources" :key="idx">
      <div class="left">
        <span class="index">{{idx+1}}.</span>
        <span class="filename">{{item.title}}</span>
        <span class="filesize">{{item.size}}</span>
      </div>
      <div class="right">
        <i class="icon icon-download_alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resources: [
        {
          title: '[基本乐理通用教材].李重光.pdf',
          size: '4.05M'
        },
        {
          title: '[基本乐理通用教材].李重光.pdf',
          size: '4.05M'
        },
        {
          title: '[基本乐理通用教材].李重光.pdf',
          size: '4.05M'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/mixin'

.course-resource {
  .resource-item {
    display flex
    justify-content space-between
    width 100%
    box-sizing border-box
    line-height 1.8em
    margin-bottom 10px
    background-color #dae7e5
    padding 5px 30px
    border-radius 8px
    no-wrap()
    cursor pointer
    &:hover {
      background-color #829e9a
      color white
      transition all 0.5s ease
    }
  }
}
</style>
