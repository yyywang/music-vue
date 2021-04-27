import { get } from '@/lin/plugins/axios'

class Course {
  async getCourses() {
    const res = await get('v1/course')
    return res
  }
}

export default new Course()
