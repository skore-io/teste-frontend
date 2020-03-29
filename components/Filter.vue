<template>
  <div class="filter">
    <div class="group" v-for="status in statuses" :key="status">
      <input :id="status" type="checkbox" name="filter" :value="status" v-model="selectedStatuses" />
      <label :for="status">{{getStatusName(status)}}</label>
    </div>
  </div>
</template>

<script>
import statusHelper from "~/functions/statusHelper";

export default {
  data() {
    return {
      selectedStatuses: []
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
    selectedStatuses(statuses) {
      this.$emit("changed", statuses);
    }
  },
  mounted() {
    this.selectedStatuses = this.statuses;
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
