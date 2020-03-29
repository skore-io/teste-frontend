<template>
  <div class="filter">
    <div v-for="status in statuses" :key="status">
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
</style>
