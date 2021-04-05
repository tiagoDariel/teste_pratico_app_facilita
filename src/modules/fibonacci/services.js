import http from '@/http'

class Services {
  listar () {
    return http.get('/fibonacci-list')
  }

  salvar (livro) {
    return http.post('fibonacci-save', livro)
  }

  deletar (id) {
    return http.delete(`/fibonacci-delete/${id}`)
  }
}

export default new Services()
