<template>
  <div class="user-notification">
    <div class="set-readed"><button class="btn-default" :disabled="disableSetReaded">设为已读</button></div>
    <div class="tb-container">
      <table>
        <thead>
          <tr>
            <th>全选</th>
            <th>类型</th>
            <th>内容</th>
            <th>发布时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in notifications" :key="idx">
            <td class="padding-lr-md">
                <input type="checkbox" :value="item.id" v-model="checkedNotifications">
            </td>
            <td  class="padding-lr-md">公告</td>
            <td id="notification-content">内容内容内容内容容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容</td>
            <td  class="padding-lr-md">2020/10/10 22:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedNotifications: [], // 选中的标为已读的数组
      notifications: [
        {id: 0},
        {id: 1},
        {id: 2}
      ]
      // disableSetReaded: true // 设为已读按钮是否禁用
    }
  },
  computed: {
    disableSetReaded() {
      return this.checkedNotifications.length === 0
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.user-notification {
  .set-readed {
    margin-bottom 20px
    &>.btn-default {
      font-size 16px
      color $color-theme
    }
  }
  #notification-content {
    max-width 760px
    text-align left
    line-height 1.4em
    padding-left 10px
    padding-right 10px
    overflow hidden
    text-overflow ellipsis
  }
}
</style>
