<template>
  <div class="step">
    <div class="circle">{{ step.id }}</div>
    <div>
      <h2>{{step.name}}</h2>
      <v-status :status="step.status || 'NOT_STARTED'" />
    </div>
  </div>
</template>

<script>
import vStatus from "./Status";

export default {
  props: {
    step: Object
  },
  components: {
    vStatus
  }
};
</script>

<style lang="sass" scoped>
.step
  display: flex
  margin: 20px 0

  .circle
    display: flex
    justify-content: center
    align-items: center
    width: 80px
    height: 80px
    border-radius: 100%
    background: rgba(white, .03)
    border: 2px solid rgba(white, .06)
    font-size: 40px
    font-weight: 700
    margin-right: 20px

  h2
    margin-bottom: 5px
</style>
