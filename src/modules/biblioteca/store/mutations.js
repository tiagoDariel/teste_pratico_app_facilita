const SET_LIVROS = (state, payload) => {
  state.list = payload.lista
}
const SET_USUARIO = (state, payload) => {
  state.usuario = payload.lista
}

const SET_PRINT = (state, payload) => {
  state.print = payload
}

export default {
  SET_LIVROS,
  SET_USUARIO,
  SET_PRINT
}
