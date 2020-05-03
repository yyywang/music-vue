const tClassRouter = {
  route: null,
  name: null,
  title: '班级管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'views/t-class/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '创建班级',
      type: 'view',
      name: 'tClassAdd',
      route: '/t-class/add',
      filePath: 'views/t-class/TClassAdd.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '班级列表',
      type: 'view',
      name: 'tClassList',
      route: '/t-class/list',
      filePath: 'views/t-class/TClassList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '学生名单',
      type: 'view',
      name: 'tStudentList',
      route: '/t-class/student/list',
      filePath: 'views/t-class/StudentList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default tClassRouter
