const statisticsRouter = {
  route: null,
  name: null,
  title: '数据统计',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'views/statistics/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '学生画像',
      type: 'view',
      name: 'studentPortrait',
      route: '/statistics/student/portrait',
      filePath: 'views/statistics/StudentPortrait.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '学生行为',
      type: 'view',
      name: 'studentAction',
      route: '/statistics/student/action',
      filePath: 'views/statistics/StudentAction.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '老师行为',
      type: 'view',
      name: 'teacherAction',
      route: '/statistics/teacher/action',
      filePath: 'views/statistics/StudentAction.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '访问分析',
      type: 'view',
      name: 'webVisit',
      route: '/statistics/web/visit',
      filePath: 'views/statistics/WebVisit.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '作品分析',
      type: 'view',
      name: 'musicList',
      route: '/statistics/music/list',
      filePath: 'views/statistics/MusicList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default statisticsRouter
