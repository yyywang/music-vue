<template>
  <div class="nav-path">
    <router-link v-for="(item, idx) in navPaths" tag="div" :to="item.path" :key="idx" class="nav-item">
      <span :class="{'nav-link': true, 'now': isNow(idx)}">{{item.name}}</span>
    <span v-if="!isNow(idx)" class="nav-divider">></span> <!-- 最后一个不加 > -->
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    navPaths: Array
  },
  methods: {
    isNow(idx) {
      // 若循环编号 === 循环数组长度-1，则为最后一条数据
      // 最后一条数据也是当前路由
      return idx === this.navPaths.length - 1
    }
  }
}
</script>

<style lang="stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

.nav-path {
  display flex
  font-size 16px
  color $color-sub-theme
  .nav-link {
    text-shadow 0 0 6px color-sub-theme-rgba(0.3)
    cursor pointer
    &.now {
      color $color-text-black
    }
    hover-move-right()
  }
  .nav-divider {
    margin-left 5px
    margin-right 5px
  }
}

</style>
