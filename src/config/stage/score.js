const scoreRouter = {
  route: null,
  name: null,
  title: '成绩管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'views/score/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '成绩比重设置',
      type: 'view',
      name: 'scoreEdit',
      route: '/score/edit',
      filePath: 'views/score/ScoreEdit.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    }
  ],
}

export default scoreRouter
