export const state = () => ({
  activite: []
})

export const mutations = {
  SET_MENU(state, activite) {
      state.activite = activite
  }
}

export const actions = {
  nuxtServerInit({ commit }) {
      return this.$axios.$get('http://localhost:4000/activite/')
      .then((response) => {
          commit('SET_MENU', response)
      })
  }
}