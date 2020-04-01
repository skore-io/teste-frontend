<template>
  <div class="container">
    <div>
    <h1 class="title">
      Skore-IO: Teste Frontend
    </h1>
    <section>
      <h2>Missions</h2>
      <missions></missions>
    </section>
    </div>
  </div>
</template>

<script>
import Missions from '~/components/Missions.vue'

export default {
  components: {
    Missions
  }
}
</script>

<style scoped>
section {
  padding-top: 15px;
}
</style>
