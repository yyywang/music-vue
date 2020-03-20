<template>
  <div id="app">
    <m-header></m-header>
    <transition name>
      <router-view></router-view>
    </transition>
    <div class="page-footer">
      <div class="icp">
        <a
          href="http://www.beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >浙ICP备19038301号</a>
      </div>
      <div class="copyright">Copyright © 2020 本站资源仅供教学使用，禁止商用</div>
    </div>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'

export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style lang="stylus">
@import 'common/stylus/variable'

.fade-enter-active, .fade-leave-active {
  transition opacity 0.5s
}
.fade-enter, .fade-leave-to { /* .fade-leave-active below version 2.1.8 */
  opacity 0
}
.zoom-enter-active {
  animation zoomInLeft 1.5s
}
.zoom-leave-active {
  animation zoomOutRight 1s
}
.zoom-enter, .zoom-leave-to {
  opacity 0
}
@keyframes zoomInLeft {
  from {
    opacity 0
    transform scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)
    animation-timing-function cubic-bezier(0.55, 0.055, 0.675, 0.19)
  }
  60% {
    opacity 1
    transform scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)
    animation-timing-function cubic-bezier(0.175, 0.885, 0.32, 1)
  }
}
@keyframes zoomOutRight {
  40% {
    opacity 1
    transform scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)
  }
  to {
    opacity 0
    transform scale(0.1) translate3d(2000px, 0, 0)
    transform-origin right center
  }
}
@keyframes rotateInDownLeft {
  from {
    transform-origin left bottom
    transform rotate3d(0, 0, 1, -45deg)
    opacity 0
  }
  to {
    transform-origin left bottom
    transform translate3d(0, 0, 0)
    opacity 1
  }
}
@keyframes rotateOutDownLeft {
  from {
    transform-origin left bottom
    opacity 1
  }
  to {
    transform-origin left bottom
    transform rotate3d(0, 0, 1, 45deg)
    opacity 0
  }
}
.page-footer {
  display flex
  justify-content space-around
  clear both
  width 800px
  margin 0 auto
  padding 40px
  margin-top 60px
  font-size 12px
  border-top 1px solid $color-theme-md
}
</style>
