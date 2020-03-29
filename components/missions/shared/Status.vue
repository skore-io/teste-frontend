<template>
  <div class="status">
    <div class="circle" :style="`background-color: ${color}`"></div>
    {{name}}
  </div>
</template>

<script>
import missionsHelper from "~/functions/missionsHelper";
import stepsHelper from "~/functions/stepsHelper";

export default {
  props: {
    status: String,
    type: {
      type: String,
      default: "mission"
    }
  },
  computed: {
    helper() {
      return this.type === "mission" ? missionsHelper : stepsHelper;
    },
    color() {
      return this.helper.getStatusColor(this.status);
    },
    name() {
      return this.helper.getStatusName(this.status);
    }
  }
};
</script>

<style lang="sass" scoped>
.status
  display: flex
  align-items: center
  text-transform: capitalize

  .circle
    width: 20px
    height: 20px
    border-radius: 100%
    margin-right: 5px
</style>
