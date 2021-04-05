import services from '../services'

export const actionAddLivro = async ({ dispatch }, payload) => {
  await services.salveLivro(payload)
  return dispatch('ActionListLivros')
}

export const ActionListLivros = async ({ commit }) => {
  try {
    const lista = await services.lista().then(res => {
      return res.data
    })
    commit('SET_LIVROS', { lista })
  } catch (e) {
    commit('SET_ERROR', 'error')
  }
}

export const ActionEmprestarLivro = async ({ dispatch }, payload) => {
  await services.emprestimoDeLivro(payload.id, payload.form).then(() => {
    dispatch('ActionListUsuario')
    dispatch('ActionListLivros')
  })
}

export const ActionListUsuario = async ({ commit }) => {
  try {
    const lista = await services.listaUsuario().then(res => {
      return res.data
    })
    commit('SET_USUARIO', { lista })
  } catch (e) {
    commit('SET_ERROR', 'error')
  }
}

export const actionAddUsuario = async ({ dispatch }, payload) => {
  await services.saveUsuario(payload)
  return dispatch('ActionListUsuario')
}
export const actionImprimir = () => {
  window.print()
}
export const actionPrint = async ({ commit }, payload) => {
  commit('SET_PRINT', payload)
  return window.print()
}
