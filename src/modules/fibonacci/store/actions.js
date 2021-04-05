import Services from '../services'

export const actionSaveNumero = async ({ dispatch }, payload) => {
  await Services.salvar(payload).then(() => {
    return dispatch('actionListNumero')
  }).catch(() => {
    alert('Nenhum destes valores são válidos como sequencia de Fibonacci!')
  })
}

export const actionListNumero = async ({ commit }) => {
  await Services.listar().then(res => {
    return commit('SET_NUMERO', res.data)
  })
}

export const actionsDeleteNumero = async ({ dispatch }, id) => {
  await Services.deletar(id).then(() => {
    return dispatch('actionListNumero')
  })
}
