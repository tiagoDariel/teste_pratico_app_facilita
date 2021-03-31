import services from '../services'

export const actionAddLivro = ({ context }, payload) => {

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
