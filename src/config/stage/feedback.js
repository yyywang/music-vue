const feedbackRouter = {
  route: null,
  name: null,
  title: '反馈管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'views/feedback/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '反馈列表',
      type: 'view',
      name: 'feedbackList',
      route: '/feedback/list',
      filePath: 'views/feedback/FeedbackList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    }
  ],
}

export default feedbackRouter
