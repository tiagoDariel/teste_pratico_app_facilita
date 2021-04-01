import http from '../../http'

class Services {
  lista () {
    return http.get('/biblioteca-livro')
  }

  salveLivro (livro) {
    return http.post('biblioteca-save-livro', livro)
  }

  listaUsuario () {
    return http.get('/biblioteca-usuario')
  }

  saveUsuario (usuario) {
    return http.post('biblioteca-save-usuario', usuario)
  }
}

export default new Services()
