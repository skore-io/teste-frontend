export const state = () => ({
  missions: [],
  filterKey: null,
  selectedMission: null
});

export const getters = {
  filteredMissions(state) {
    if (state.filterKey) {
      return state.missions.filter(m => m.status === state.filterKey);
    } else {
      return state.missions;
    }
  }
};

export const mutations = {
  setMissions(state, missions) {
    state.missions = missions;
  },
  applyFilter(state, filter) {
    state.filterKey = filter;
  },
  selectMission(state, selectedMission) {
    state.selectedMission = selectedMission;
  }
};

export const actions = {
  loadMissions(storeContext, payload) {
    storeContext.commit("setMissions", payload.data);
  },
  loadMission(storeContext, payload) {
    storeContext.commit("selectMission", payload.data);
  }
};
