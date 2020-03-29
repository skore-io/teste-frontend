<template>
  <div class="status">
    <div class="circle" :style="`background-color: ${color}`"></div>
    {{name}}
  </div>
</template>

<script>
import statusHelper from "~/functions/statusHelper";

export default {
  props: {
    status: String
  },
  computed: {
    color() {
      return statusHelper.getColor(this.status);
    },
    name() {
      return statusHelper.getName(this.status);
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
