// import * as filters from '../helpers/filters'

export const state = () => ({
  client: [],
  card: [],
  activites:[],
  filteredActivites: [],
  activite: {},
  filter: {
    search: '',
    status: 'all',
    order: 'createdAt'
  }
})

// export const getters = {
//   getActivites (state) { return state.activites },
//   getFilteredActivites (state) { return state.filteredActivites },
//   getActivite (state) { return state.activite }

// }

export const mutations = {
  GET_MENU(state, client) {
    state.client = client
  },
  GET_MENU(state, card) {
      state.card = card
  },
  // setActivites (state, activites) { state.activites = activites },
  // setFilteredActivites (state, activites) { state.filteredActivites = activites },
  // setActivite (state, activite) { state.activite = activite },
  // setFilterStatus (state, status) { state.filter.status = status },
  // setFilterSearch (state, search) { state.filter.search = search },
  
  // setAttribute (state, obj) {
  //   state.activite[obj.attr] = obj.val
  // },

  // filterActivites (state) {
  //   const activites = [...state.activites]
  //   state.filteredActivites = activites
  //   state.filteredActivites = filters.filterActivites(state.filter, activites)
  // },
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
  // async fetchAllActivites ({ commit}) {
  //   await commit('setActivites', activites)
  //   await commit('setFilteredActivites', activites)
  // },
  // setAttribute ({ commit }, attrObj) {
  //   commit('setAttribute', attrObj)
  // },
  // async filterStatus ({ commit, dispatch }, status) {
  //   await commit('setFilterStatus', status)
  //   dispatch('filterActivites')
  // },
  // async filterSearch ({ commit, dispatch }, search) {
  //   await commit('setFilterSearch', search)
  //   dispatch('filterActivites')
  // },
  // async filterActivites ({ commit }) {
  //   await commit('filterActivites')
  // },
  
}

