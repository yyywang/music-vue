const studentHomeworkRouter = {
  name: null,
  title: '学生作业管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'views/student-homework/',
  order: null,
  inNav: true,
  children: [
    {
      title: '学生作业列表',
      type: 'view',
      name: 'gradeHomework',
      route: '/student-homework/list',
      filePath: 'views/student-homework/StudentHomeworkList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '作业评分',
      type: 'view',
      name: 'gradeHomework',
      route: '/student-homework/grade/:uid',
      filePath: 'views/student-homework/GradeHomework.vue',
      inNav: false,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default studentHomeworkRouter
