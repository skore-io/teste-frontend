<template>
  <div class="filter">
    <div class="group">
      <input id="all" type="radio" name="filter" value="all" v-model="filter" />
      <label for="all">Todas</label>
    </div>
    <div class="group" v-for="status in statuses" :key="status">
      <input :id="status" type="radio" name="filter" :value="status" v-model="filter" />
      <label :for="status">{{getStatusName(status)}}</label>
    </div>
  </div>
</template>

<script>
import missionsHelper from "~/functions/missionsHelper";
import { mapMutations } from "vuex";

export default {
  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(val) {
        this.setFilter(val);
      }
    },
    statuses() {
      return missionsHelper.getStatuses();
    }
  },
  methods: {
    ...mapMutations(["setFilter"]),
    getStatusName(status) {
      return missionsHelper.getStatusPluralName(status);
    }
  },
  // watch: {
  //   selectedStatus(status) {
  //     this.setFilter(status);
  //   }
  // }
};
</script>

<style lang="sass" scoped>
.filter
  display: flex
  flex-wrap: wrap
  justify-content: center
  margin: 10px 0 0

  .group
    margin: 12px 5px

    @media (min-width: 768px)
      margin: 15px 10px

    input
      display: none

      &:checked
        ~ label
          opacity: 1

    label
      background: rgba(white, .07)
      border-radius: 30px
      opacity: .5
      font-size: 12px
      padding: 10px 20px
      text-transform: capitalize
      cursor: pointer

      @media (min-width: 768px)
        font-size: 16px
        padding: 10px 20px
</style>
