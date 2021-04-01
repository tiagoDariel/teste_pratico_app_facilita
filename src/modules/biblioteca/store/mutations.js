const SET_LIVROS = (state, payload) => {
  state.list = payload.lista
}
const SET_USUARIO = (state, payload) => {
  state.usuario = payload.lista
}

export default {
  SET_LIVROS,
  SET_USUARIO
}
