<template>
  <div class="user-class">
    <join-class-modal :detailShow="joinClassModalShow"></join-class-modal>
    <confirm-modal
      :detailShow="exitClassConfirmModalShow"
      :confirmCallback="exitClassConfirmCallback"
      :cancelCallback="exitClassCancelCallback"
      :title="exitClassModalTitle"
      :content="exitClassModalContent"
    ></confirm-modal>
    <div class="join-class">
      <button class="btn-default" @click="showJoinClassModal">加入新班级</button>
    </div>
    <div class="tb-container">
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>课程</th>
            <th>所属学期</th>
            <th>结束日期</th>
            <th>班号</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in 6" :key="idx">
            <td>{{idx+1}}</td>
            <td>流行音乐赏析</td>
            <td>2019/2020 上</td>
            <td>2020/06/06</td>
            <td>123456</td>
            <td class="delete">
              <span class="delete-text" @click="showExitClassConfirmModal('流行音乐')">退出班级</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import JoinClassModal from 'components/join-class-modal/join-class-modal'
import ConfirmModal from 'components/confirm-modal/confirm-modal'

export default {
  data() {
    return {
      joinClassModalShow: false, // 控制“加入班级”的模态框显隐
      exitClassConfirmModalShow: false, // 控制“退出班级”的模态框显隐
      exitClassModalTitle: '提示', // 退出班级模态框的标题
      exitClassModalContent: null // 退出班级模态框的内容
    }
  },
  components: {
    JoinClassModal,
    ConfirmModal
  },
  methods: {
    showJoinClassModal() {
      this.joinClassModalShow = true
    },
    hideJoinClassModal() {
      this.joinClassModalShow = false
    },
    showExitClassConfirmModal(className) {
      this.exitClassConfirmModalShow = true
      this.exitClassModalContent = `确认退出“ ${className} ”?`
    },
    hideExitClassConfirmModal() {
      this.exitClassConfirmModalShow = false
    },
    // 确认退出班级的回调函数
    exitClassConfirmCallback() {
      this.hideExitClassConfirmModal()
      console.log('exit class')
    },
    // 取消退出班级的回调函数
    exitClassCancelCallback() {
      this.hideExitClassConfirmModal()
    }
  },
  provide() {
    return {
      hideJoinClassModal: this.hideJoinClassModal
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin'
@import '~common/stylus/variable'

.user-class {
  &>.join-class {
    margin-bottom 20px
    &>.btn-default {
      font-size 16px
      color $color-theme
    }
  }
  &>.tb-container {
    .delete {
      color red
      &>.delete-text {
        hover-move-right()
      }
    }
  }
}
</style>
