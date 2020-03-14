<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Online from 'components/online/online'
import Recommend from 'components/recommend/recommend'
import User from 'components/user/user'

export default {
  name: 'App',
  components: {
    MHeader,
    Online,
    Recommend,
    User
  }
}
</script>

<style>

</style>
