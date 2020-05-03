const bookRouter = {
  route: null,
  name: null,
  title: '课程管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'views/course/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '添加课程',
      type: 'view',
      name: 'courseAdd',
      route: '/course/add',
      filePath: 'views/course/CourseAdd.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '课程列表',
      type: 'view',
      name: 'courseList',
      route: '/course/list',
      filePath: 'views/course/CourseList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '课程详情管理',
      type: 'view',
      name: 'courseDetail',
      route: '/course/detail/:cid',
      filePath: 'views/course/CourseDetail.vue',
      inNav: false,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '布置作业',
      type: 'view',
      name: 'homeworkAdd',
      route: '/course/homework/add',
      filePath: 'views/course/HomeworkAdd.vue',
      inNav: false,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '编辑作业',
      type: 'view',
      name: 'homeworkEdit',
      route: '/course/homework/:hid/edit',
      filePath: 'views/course/HomeworkEdit.vue',
      inNav: false,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default bookRouter
