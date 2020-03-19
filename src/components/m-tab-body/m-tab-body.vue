<template>
  <div class="m-tab-body">
    <div class="tab-header">
      <router-link
        class="tab-item"
        tag="div"
        v-for="(item, idx) in tabHeaders"
        :key="idx"
        :to="item.path"
      >
        <span class="tab-link">{{item.name}}</span>
      </router-link>
    </div>
    <div class="tab-body">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
/**
 * eg:
 *
 * tabHeaders.item:
 * {
 *    name: '课程主页',
 *    path: {name: 'router-name', params: {param: 123}}
 * }
 */
export default {
  props: {
    tabHeaders: Array
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.m-tab-body {
  .tab-header {
    display flex
    .tab-item {
      height 17px
      padding 10px 15px
      color #ffffff
      background-color $color-theme-md
      border-top-left-radius 8px
      border-top-right-radius 8px
      margin-right 5px
      &.router-link-active {
        background-color $color-theme
      }
      cursor pointer
      transition all 0.5s cubic-bezier(0.25,0.1,0.25,1)
      &:hover {
        height 23px
        margin-top -6px
        transition all 0.5s cubic-bezier(0.25,0.1,0.25,1)
      }
    }
  }
  .tab-body {
    background-color #ffffff
    padding 30px 15px
    border-bottom-left-radius 8px
    border-bottom-right-radius 8px
    box-shadow 0 16px 16px -10px rgba(0, 0, 0, .2)
  }
}

</style>
