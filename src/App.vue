<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
    <!-- <m-register></m-register> -->
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import MRegister from 'components/m-register/m-register'

export default {
  name: 'App',
  components: {
    MHeader,
    MRegister
  }
}
</script>

<style>

</style>
