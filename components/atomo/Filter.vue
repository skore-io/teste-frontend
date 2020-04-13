<template>
  <div class="filter">
    <div class="group">
      <input id="all" type="radio" name="filter" value="all" v-model="filter" />
      <label for="all">Todas</label>
    </div>
    <div class="group" v-for="status in statuses" :key="status">
      <input
        :id="status"
        type="radio"
        name="filter"
        :value="status"
        v-model="filter"
      />
      <label :for="status">{{ getStatusName(status) }}</label>
    </div>
  </div>
</template>

<script>
import missions from "../../functions/missions";
import { mapMutations } from "vuex";

export default {
  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(val) {
        this.setFilter(val);
      },
    },
    statuses() {
      return missions.getStatuses();
    },
  },
  methods: {
    ...mapMutations(["setFilter"]),
    getStatusName(status) {
      return missions.getStatusPluralName(status);
    },
  },
};
</script>

<style scoped>
.filter {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 10px 0 0;
}
.filter .group {
  margin: 12px 5px;
}
@media (min-width: 768px) {
  .filter .group {
    margin: 15px 10px;
  }
}
.filter input {
  display: none;
}
.filter input:checked ~ label {
  color: #00d0be;
}
.filter label {
  color: #767575;
  cursor: pointer;
}
@media (min-width: 768px) {
  .filter label {
    font-size: 16px;
    padding: 10px 20px;
  }
}
</style>
