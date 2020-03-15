import http from './http'

function getCourses(page) {
  return http.get('/courses', {
    params: {
      page: page
    }
  })
}

export { getCourses }
