import Vue from 'vue'
import Router from 'vue-router'
import Online from 'components/online/online'
import Recommend from 'components/recommend/recommend'
import RecommendDetail from 'components/recommend-detail/recommend-detail'
import RecommendMy from 'components/recommend-my/recommend-my'
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
import CourseQuestionMy from 'components/course-question-my/course-question-my'
import HomeworkDetail from 'components/homework-detail/homework-detail'
import MusicDetail from 'components/music-detail/music-detail'
import User from 'components/user/user'
import UserProfile from 'components/user-profile/user-profile'
import UserClass from 'components/user-class/user-class'
import UserHomework from 'components/user-homework/user-homework'
import UserNotification from 'components/user-notification/user-notification'

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
    { // 公开问答
      path: '/online/:courseId/questions',
      name: 'courseQuestion',
      component: CourseQuestion
    },
    {
      path: '/online/:courseId/questions/my',
      name: 'courseQuestionMy',
      component: CourseQuestionMy
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
    { // 视频详情页
      path: '/online/:courseId/weeks/:weekNum/musics/:musicId',
      name: 'musicDetail',
      component: MusicDetail
    },
    { // 美音推荐首页
      path: '/recommends',
      name: 'recommend',
      component: Recommend
    },
    {// 我的推荐
      path: '/recommends/my',
      name: 'myRecommends',
      component: RecommendMy
    },
    { // 美音推荐详情页
      path: '/recommends/:recommendId',
      name: 'recommendDetail',
      component: RecommendDetail
    },
    { // 个人中心相关
      path: '/user',
      name: 'user',
      component: User,
      children: [
        {
          path: 'profile',
          name: 'userProfile',
          component: UserProfile
        },
        {
          path: 'classes',
          name: 'userClass',
          component: UserClass
        },
        {
          path: 'homeworks',
          name: 'userHomework',
          component: UserHomework
        },
        {
          path: 'notifications',
          name: 'userNotification',
          component: UserNotification
        }
      ]
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
      path: '/search',
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
