<template>
  <div class="filter">
    <div class="group">
      <input id="all" type="radio" name="filter" value="all" v-model="selectedStatus" />
      <label for="all">Todos</label>
    </div>
    <div class="group" v-for="status in statuses" :key="status">
      <input :id="status" type="radio" name="filter" :value="status" v-model="selectedStatus" />
      <label :for="status">{{getStatusName(status)}}</label>
    </div>
  </div>
</template>

<script>
import statusHelper from "~/functions/statusHelper";

export default {
  data() {
    return {
      selectedStatus: "all"
    };
  },
  computed: {
    statuses() {
      return statusHelper.getStatuses();
    },
    statusMap() {
      return statusHelper.getStatusMap();
    }
  },
  methods: {
    getStatusName(status) {
      return statusHelper.getName(status);
    }
  },
  watch: {
    selectedStatus(status) {
      this.$emit("changed", status);
    }
  }
};
</script>

<style lang="sass" scoped>
.filter
  display: flex
  justify-content: center
  margin: 10px 0

  .group
    margin: 0 10px

    input
      display: none

      &:checked
        ~ label
          opacity: 1

    label
      background: rgba(white, .07)
      border-radius: 8px
      opacity: .5
      padding: 10px 20px
      text-transform: capitalize
      cursor: pointer
</style>
