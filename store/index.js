// TODO: Futuramente mover para um .env ou algum lugar mais protegido e configurável
const missionsEndpoint = 'https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions/'

export const state = () => ({
  missionsPreview: [],
  selectedMission: null
})

export const mutations = {
  SET_SELECTED(state, mission) {
    state.selectedMission = mission
  },
  SET_PREVIEWS(state, missions) {
    state.missionsPreview = missions
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const result = await this.$axios.$get(missionsEndpoint);
      if (result) {
        commit('SET_PREVIEWS', result)
      }
    } catch (err) {
      commit('SET_PREVIEWS', [])
    }
  },
  async fetchDetailed({ commit }, missionId) {
    commit('SET_SELECTED', null)
    try {
      const result = await this.$axios.$get(missionsEndpoint + missionId);
      if (result) {
        commit('SET_SELECTED', result)
      }
    } catch (error) {
      // TODO: Tratar corretamente o erro com base no status code
      console.error(error)
    }
  }
}
