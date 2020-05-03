const Config = {
  baseURL: process.env.VUE_APP_BASE_URL,
  stagnateTime: 1 * 60 * 60 * 1000, // 无操作停滞时间  默认1小时
  openAutoJumpOut: true, // 是否开启无操作跳出
  notLoginRoute: ['login'], // 无需登录即可访问的路由 name,
  defaultRoute: '/about', // 默认打开的路由
}

export default Config
