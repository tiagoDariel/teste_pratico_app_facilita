import Services from '../sevices'

export const ActionsAddUser = async ({ dispatch }, payload) => {
  await Services.addUser(payload).then(() => {
    dispatch('actionListUser')
  })
}

export const actionListUser = async ({ commit }) => {
  try {
    const lista = await Services.listUser().then(res => {
      return res.data
    })
    commit('SET_USER', { lista })
  } catch (e) {
    alert('error' + e)
  }
}
