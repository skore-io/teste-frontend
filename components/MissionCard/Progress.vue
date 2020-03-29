<template>
  <div class="progress">
    <span>
      <b>Progresso:</b>
      {{percentage || 0}}%
    </span>
    <div class="bar" :style="`width: ${percentage}%; background-color: ${color}`"></div>
  </div>
</template>

<script>
import statusHelper from "~/functions/statusHelper";

export default {
  props: {
    progress: Object,
    status: String
  },
  computed: {
    color() {
      return statusHelper.getColor(this.status);
    },
    percentage() {
      return this.progress ? this.progress.percentage : 0;
    }
  }
};
</script>

<style lang="sass" scoped>
.progress
  width: calc(100% + 57px)
  margin-top: 20px
  text-align: center

  .bar
    margin-top: 10px
    background: red
    width: 100%
    height: 6px
    border-radius: 0 0 50px 50px
</style>
