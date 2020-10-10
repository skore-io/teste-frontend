<template>
  <p v-if="missions.length < 1">Fetching posts...</p>

  <div v-else>
    <select v-model="filter">
      <option value="">Todos</option>

      <option
        v-for="(statusItem, statusKey, statusIndex) of status"
        :key="`${statusKey}-${statusIndex}`"
        :value="statusKey"
        >{{ statusItem }}
      </option>
    </select>

    <ul>
      <li
        v-for="(missionItem, missionIndex) of filterMissions()"
        :key="`${missionIndex}-${missionItem.id}`"
      >
        <nuxt-link :to="`/missions/${missionItem.id}`"
          >{{ missionItem.name }} - {{ status[missionItem.status] }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      missions: [],
      filter: "",
      status: {
        IN_PROGRESS: "Em andamento",
        NOT_STARTED: "Não iniciado",
        COMPLETED: "Completo",
        BLOCKED: "Bloqueado"
      }
    };
  },

  mounted() {
    this.getMissions();
  },

  methods: {
    filterMissions() {
      const filteredMissions = this.missions.filter(missionItem => {
        if (!this.filter || this.filter === missionItem.status) {
          return missionItem;
        }
      });

      console.log(filteredMissions);

      return filteredMissions;
    },

    async getMissions() {
      this.missions = await this.$axios.$get(
        `https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions`
      );
    }
  }
};
</script>

<style></style>
