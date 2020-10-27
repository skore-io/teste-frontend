<template>
  <div>
    <div class="missions-container">
      <Card
        v-for="mission in missions"
        v-bind:key="mission.id"
      >
        <div class="content">
          <div>
            <h2>{{ mission.name }}</h2>
            <p>Status: <strong>{{ mission.status }}</strong></p>
            <p>Prioridade: <strong>{{ mission.priority }}</strong></p>
          </div>
        </div>
        <nuxt-link v-bind:to="mission.id">Detalhes</nuxt-link>
      </Card>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
import Card from './Card'

export default {
  components: {
    Card
  },
  data() {
    return {
      missions: []
    }
  },
  async mounted() {
    const { data } = await Axios.get('https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions')
    this.missions = data
  }
}
</script>
<style scoped>
.missions-container {
  display: flex;
  margin: 0 -10px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
}

.card {
  padding: 20px;
  margin: 15px;
  max-width: 21%;
  flex: 1 0 21%; /* explanation below */
}

.card:last-child {
  margin-right: auto;
}
</style>