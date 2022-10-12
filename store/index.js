export const state = () => ({
  client: [],
  card: []
})

export const mutations = {
  GET_MENU(state, client) {
    state.client = client
},
  GET_MENU(state, card) {
      state.card = card
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
      await this.$axios.$get('http://localhost:4000/card/')
          .then((response) => {
          commit('GET_MENU', response)
          });
  },
    
  
}

