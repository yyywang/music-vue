<template>
  <div class="layout-heart recommend-my">
    <div class="header">
      <div class="left">
        <nav-path :navPaths="navPaths"></nav-path>
        <select class="tag-picker" name id>
          <option value>欧美</option>
          <option value>华语</option>
          <option value>布鲁斯</option>
        </select>
      </div>
    </div>
    <div class="card-list">
      <div class="card-container" v-for="(item, idx) in 50 " :key="idx">
        <recommend-card></recommend-card>
      </div>
    </div>
  </div>
</template>

<script>
import NavPath from 'components/nav-path/nav-path'
import RecommendCard from 'components/recommend-card/recommend-card'

export default {
  data() {
    return {
      navPaths: [
        {
          name: '美音推荐',
          path: { name: 'recommend' }
        },
        {
          name: '我的推荐',
          path: { name: 'myRecommends' }
        }
      ]
    }
  },
  components: {
    NavPath,
    RecommendCard
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.header {
  display flex
  align-items center
  justify-content space-between
  .left {
    display flex
    align-items center
    .tag-picker {
      width 120px
      font-size 13px
      border 1px solid #ffffff
      padding 5px 10px
      outline none
      border-radius 4px
      margin-left 20px
      &:focus {
        border 1px solid $color-theme-md
      }
    }
  }
  .right {
    hover-move-right()
    text-shadow-theme()
  }
}
.card-list {
  display flex
  justify-content space-between
  flex-wrap wrap
  width 100%
  .card-container {
    width 32%
    box-sizing border-box
    margin-top 20px
  }
}
</style>
