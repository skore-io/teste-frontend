export const state = () => ({
  missions: [],
  filterKey: "",
  selectedMission: {}
});

export const getters = {
  filteredMissions(state) {
    if (!state.filterKey) {
      return state.missions;
    }

    return state.missions.filter(m => m.status === state.filterKey);
  },
  filterKey(state) {
    return state.filterKey;
  },
  selectedMission(state) {
    return state.selectedMission;
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
