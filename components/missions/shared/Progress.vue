<template>
  <div class="progress">
    <span>
      <b>Progresso:</b>
      {{percentage || 0}}%
    </span>
    <div
      class="bar"
      :class="{uncompleted: isUncompleted}"
      :style="`width: ${percentage}%; background-color: ${color}`"
    ></div>
  </div>
</template>

<script>
import missionsHelper from "~/functions/missionsHelper";

export default {
  props: {
    progress: Object,
    status: String
  },
  computed: {
    isUncompleted() {
      return this.progress && this.progress.percentage < 100;
    },
    color() {
      return missionsHelper.getStatusColor(this.status);
    },
    percentage() {
      return this.progress ? this.progress.percentage : 0;
    }
  }
};
</script>

<style lang="sass" scoped>
.progress
  width: calc(100% + 39px)
  margin-top: 20px
  text-align: center

  @media (min-width: 768px)
    width: calc(100% + 57px)

  .bar
    margin-top: 10px
    background: red
    width: 100%
    height: 6px
    border-radius: 0 0 50px 50px
    animation: progressive 1s

  .uncompleted
    border-radius: 0 0 0 50px

@keyframes progressive
  from
    width: 0
</style>
