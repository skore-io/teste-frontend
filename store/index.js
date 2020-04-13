export const state = () => ({
  missions: null,
  mission: null,
  filter: "all",
  loader: false,
  error: null
});

export const getters = {
  list(state) {
    return state.filter === "all"
      ? state.missions
      : state.missions.filter(el => el.status === state.filter);
  },
  missionCompletedSteps(state) {
    return state.mission &&
      state.mission.enrollment &&
      state.mission.enrollment.completed_steps
      ? state.mission.enrollment.completed_steps
      : [];
  }
};

export const actions = {
  async fetchAll({ commit }) {
    try {
      commit("setLoader", true);
      let res = await this.$axios.$get("/missions");
      commit("setMissions", res);
      commit("setLoader", false);
    } catch (e) {
      commit("setLoader", false);
      throw e;
    }
  },
  async getMission({ commit }, id) {
    try {
      let res = await this.$axios.$get(`/missions/${id}`);
      commit("setMission", res);
    } catch (e) {
      e.response.status === 404
        ? commit(
            "setError",
            " Essa missão está bloqueada ou não existe"
          )
        : commit(
            "setError",
            "Ocorreu um erro inesperado"
          );
      throw e;
    }
  }
};

export const mutations = {
  setMissions(state, payload) {
    state.missions = payload;
  },
  setMission(state, payload) {
    state.mission = payload;
  },
  setFilter(state, payload) {
    state.filter = payload;
  },
  setLoader(state, payload) {
    state.loader = payload;
  },
  setError(state, payload) {
    state.error = payload;
  }
};
