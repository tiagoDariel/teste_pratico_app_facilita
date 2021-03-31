import http from '../../http'

class Services {
  lista () {
    console.log(http.get('biblioteca'))
    return http.get('/biblioteca')
  }
}

export default new Services()
