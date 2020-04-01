<template>
  <div class="container">
    <section class="hero">
      <h1>Skore-IO: Teste Frontend</h1>
      <h2>Motivação</h2>
      <p>A motivação para este website é demonstrar conhecimento e dia-a-dia na codificação de soluções para frontend</p>
    </section>
    <hr />
    <section>
      <h2>Missions</h2>
      <missions></missions>
    </section>
  </div>
</template>

<script>
import Missions from "~/components/Missions.vue";

export default {
  components: {
    Missions
  }
};
</script>

<style scoped>
.container {
  padding-left: 2rem;
  padding-right: 2rem;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
}

.hero > p {
  text-align: center;
}
</style>
