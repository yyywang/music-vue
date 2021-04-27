/* eslint-disable class-methods-use-this */
import { post } from '@/lin/plugins/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Client {
  // constructor() {}

  // 类中的方法可以代表一个用户行为
  async register(info) {
    const res = await post('v1/client/register', info)
    return res
  }
}

export default new Client()
