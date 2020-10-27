<template>
  <div class="container">
    <div class="main">
      <h1 class="title">
        {{ mission.name }}
      </h1>
      <div class="infos">
        <div>
          <p>Status: <strong>{{ mission.status }}</strong></p>
          <p>Prioridade: <strong>{{ mission.priority }}</strong></p>
          <p>Etapas: </p>
          <ul>
            <li
              v-for="step in mission.steps"
              v-bind:key="step.id"
            >
              {{ step.name }}
            </li>
          </ul>
          <nuxt-link to="/">Voltar</nuxt-link>
        </div>
        <img v-bind:src="mission.thumb_url" >
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      mission: {}
    }
  },
  async mounted() {
    const { id } = this.$route.params
    const { data } = await Axios.get(`https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions/${id}`)
    this.mission = data
  }
};
</script>
<style scoped>
.infos {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  text-align: left;
}
</style>