// TODO: Futuramente mover para um .env ou algum lugar mais protegido e configurável
const missionsEndpoint = 'https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions/'

export const state = () => ({
  missionsPreview: [],
  selectedMission: null
})

export const mutations = {
  setSelected(state, mission) {
    state.selectedMission = mission
  },
  setPreviews(state, missions) {
    state.missionsPreview = missions
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const result = await this.$axios.$get(missionsEndpoint);
      if (result) {
        commit('setPreviews', result)
      }
    } catch (err) {
      commit('setPreviews', [])
    }
  },
  async fetchDetailed({ commit }, missionId) {
    commit('setSelected', null)
    try {
      const result = await this.$axios.$get(missionsEndpoint + missionId);
      if (result) {
        commit('setSelected', result)
      }
    } catch (error) {
      // TODO: Tratar corretamente o erro com base no status code
      console.error(error)
    }
  }
}
