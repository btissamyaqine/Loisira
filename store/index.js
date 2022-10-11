export const state = () => ({
  client: [],
  activite: []
})

export const mutations = {
  GET_MENU(state, client) {
    state.client = client
},
  GET_MENU(state, activite) {
      state.activite = activite
  }

}

export const actions = {

  async nuxtServerInit({ commit }) {
   await this.$axios.$get('http://localhost:4000/client/')
            .then((response) => {
            commit('GET_MENU', response)
            });
    },
      async nuxtServerInit({ commit }) {
      await this.$axios.$get('http://localhost:4000/activite/')
          .then((response) => {
          commit('GET_MENU', response)
          });
  },
    
  
}

