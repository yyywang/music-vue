<template>
  <div class="layout-heart user">
    <m-tab-body :tabHeaders="tabHeaders"></m-tab-body>
  </div>
</template>

<script>
import MTabBody from 'components/m-tab-body/m-tab-body'
import JoinClassModal from 'components/join-class-modal/join-class-modal'

export default {
  data() {
    return {
      tabHeaders: [
        {
          name: '基本信息',
          path: {name: 'userProfile'}
        },
        {
          name: '班级设置',
          path: {name: 'userClass'}
        },
        {
          name: '我的作业',
          path: {name: 'userHomework'}
        },
        {
          name: '我的评论',
          path: {}
        },
        {
          name: '我的收藏',
          path: {}
        },
        {
          name: '我点赞的',
          path: {}
        },
        {
          name: '我的消息',
          path: { name: 'userNotification' }
        },
        {
          name: '我的反馈',
          path: {}
        }
      ]
    }
  },
  components: {
    MTabBody,
    JoinClassModal
  }
}
</script>

<style>

</style>
