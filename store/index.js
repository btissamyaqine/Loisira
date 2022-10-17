export const state = () => ({
  client: [],
  cards: [],
  activites:[],
})

export const mutations = {
  GET_MENU(state, client) {
    state.client = client
  },
  GET_MENU(state, cards) {
      state.cards = cards
  },
}

export const actions = {

  async nuxtServerInit({ commit }) {
   await this.$axios.$get('http://localhost:4000/client/')
            .then((response) => {
            commit('GET_MENU', response)
            });
  },

  async nuxtServerInit({ commit }) {
    await this.$axios.$get('http://localhost:4000/cards/')
      .then((response) => {
      commit('GET_MENU', response)
      });
  },  
}

