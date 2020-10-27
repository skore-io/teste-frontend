<template>
  <div class="missions">
    <div class="search">
      <Select
        label="Status"
        :options="[
          'NOT_STARTED',
          'IN_PROGRESS',
          'COMPLETED',
          'BLOCKED'
          ]"
          @input="selected = $event"
        />
    </div>
    <button v-on:click="search">Filtrar</button>
    <button v-on:click="clean">Limpar</button>
    <div class="missions-container">
      <Card
        v-for="mission in filteredMissions"
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
import Select from './Select'
export default {
  components: {
    Card,
    Select
  },
  data() {
    return {
      missions: [],
      filteredMissions: [],
      selected: 'IN_PROGRESS'
    }
  },
  methods: {
    search: function() {
      this.filteredMissions = this.missions.filter(mission => mission.status === this.selected)
    },
    clean: function() {
      this.filteredMissions = this.missions
    }
  },
  async mounted() {
    const { data } = await Axios.get('https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions')
    this.missions = data
    this.filteredMissions = data
  }
}
</script>
<style scoped>
.missions {
  width: 100%;
}
.missions-container {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 900px;
  justify-content: flex-start;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
}

.content h2 {
  font-size: 18px;
margin-bottom: 20px;
}

.card {
  padding: 20px;
  margin: 15px;
  max-width: 30%;
  flex: 1 0 30%; /* explanation below */
}

.search {
  max-width: 320px;
  margin: 20px auto;
}

.card:last-child {
  margin-right: auto;
}
</style>