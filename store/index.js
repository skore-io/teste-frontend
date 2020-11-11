import Vuex from 'vuex';

const filteredCourse = () => {
  return new Vuex.Store({
    state: {
      filter: 'all',
      filters: [],
    },

    mutations: {
      setFilter(state, filter) {
        this.state.filter = filter;
      },
      setFilters(state, filters) {
        this.state.filters = filters;
      },
    },

    getters: {
      filter(state) {
        return state.filter;
      },
      filters(state) {
        return state.filters;
      },
    },
  });
};

export default filteredCourse;
