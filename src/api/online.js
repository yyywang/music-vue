import http from './http'

function getCourses(page) {
  return http.get('/v1/client/register', {
    params: {
      page: page
    }
  })
}

export { getCourses }
