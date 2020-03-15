import Vue from 'vue'
import Router from 'vue-router'
import Online from 'components/online/online'
import Recommend from 'components/recommend/recommend'
import User from 'components/user/user'
import MRegister from 'components/m-register/m-register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/online'
    },
    {
      path: '/online',
      component: Online
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/register',
      component: MRegister
    }
  ]
})
