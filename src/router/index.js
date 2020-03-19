import Vue from 'vue'
import Router from 'vue-router'
import Online from 'components/online/online'
import Recommend from 'components/recommend/recommend'
import User from 'components/user/user'
import MRegister from 'components/m-register/m-register'
import Login from 'components/login/login'
import Forget from 'components/forget/forget'
import NotFound from 'components/not-found/not-found'
import Notice from 'components/notice/notice'
import SearchResult from 'components/search-result/search-result'
import HomeworkCard from 'components/homework-card/homework-card'
import HomeworkList from 'components/homework-list/homework-list'
import NavPath from 'components/nav-path/nav-path'
import CourseDetail from 'components/course-detail/course-detail'
import CourseMain from 'components/m-tab-body/course-main/course-main'
import CourseMainWeek from 'components/m-tab-body/course-main/week-musics/week-musics'
import CourseIntroduce from 'components/m-tab-body/course-introduce/course-introduce'
import CourseResource from 'components/m-tab-body/course-resource/course-resource'
import CourseOutClass from 'components/course-out-class/course-out-class'
import CourseQuestion from 'components/course-question/course-question'
import HomeworkDetail from 'components/homework-detail/homework-detail'
import MusicDetail from 'components/music-detail/music-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/online'
    },
    {
      path: '/online',
      name: 'online',
      component: Online
    },
    {
      path: '/online/:courseId',
      name: 'courseDetail',
      component: CourseDetail,
      children: [
        {
          path: '',
          redirect: 'main'
        },
        {
          path: 'main',
          name: 'courseMain',
          component: CourseMain,
          children: [
            {
              path: 'weeks/:weekNum',
              name: 'courseMainWeek',
              component: CourseMainWeek
            }
          ]
        },
        {
          path: 'introduce',
          name: 'courseIntroduce',
          component: CourseIntroduce
        },
        {
          path: 'resource',
          name: 'courseResource',
          component: CourseResource
        }
      ]
    },
    {
      path: '/online/:courseId/out-class',
      name: 'courseOutClass',
      component: CourseOutClass
    },
    {
      path: '/online/:courseId/question',
      name: 'courseQuestion',
      component: CourseQuestion
    },
    {
      path: '/online/:courseId/homeworks',
      name: 'homeworkList',
      component: HomeworkList
    },
    {
      path: '/online/:courseId/homeworks/:homeworkId',
      name: 'homeworkDetail',
      component: HomeworkDetail
    },
    // 视频详情页
    {
      path: '/online/:courseId/weeks/:weekNum/musics/:musicId',
      name: 'musicDetail',
      component: MusicDetail
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/register',
      component: MRegister
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/forget',
      component: Forget
    },
    {
      path: '/notice',
      component: Notice
    },
    {
      path: '/search-result',
      component: SearchResult
    },
    {
      path: '/homework-card',
      component: HomeworkCard
    },
    {
      path: '/nav-path',
      component: NavPath
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
