<template>
  <div class="user-homework">
    <select name>
      <option value>欧美</option>
      <option value>华语</option>
      <option value>布鲁斯</option>
    </select>
    <div v-if="homeworks.items.length > 0" class="homework-list">
      <div class="homework-card-container" v-for="(item, idx) in 6" :key="idx">
        <homework-card></homework-card>
      </div>
    </div>
  </div>
</template>

<script>
import HomeworkCard from 'components/homework-card/homework-card'

export default {
  data() {
    return {
      homeworks: {
        items: [1, 2, 3]
      }
    }
  },
  components: {
    HomeworkCard
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'

.user-homework {
  &>select {
    border 1px solid $color-theme-md
  }
  &>.homework-list {
    display flex
    justify-content space-between
    flex-wrap wrap
    .homework-card-container {
      box-sizing border-box
      width 32%
    }
  }
}
</style>
