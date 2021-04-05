import http from '@/http'

class Services {
  addUser (payload) {
    return http.post('medidas-save', payload)
  }

  listUser () {
    return http.get('medidas-list')
  }
}

export default new Services()
