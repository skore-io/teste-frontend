<template>
  <div class="container">
    <div class="missions">
      <p v-if="missions.length < 1">Fetching missions...</p>

      <div v-else>
        <div class="missions-header">
          <div class="missions-filter">
            <div>Filtrar missões por status:</div>

            <select v-model="filter">
              <option value="">Todos</option>

              <option
                v-for="(statusItem, statusKey, statusIndex) of status"
                :key="`${statusKey}-${statusIndex}`"
                :value="statusKey"
                >{{ statusItem }}
              </option>
            </select>
          </div>

          <div class="missions-list-header">
            <div>Missão</div>
            <div>Status</div>
          </div>
        </div>

        <ul class="missions-list">
          <li
            v-for="(missionItem, missionIndex) of filterMissions()"
            :key="`${missionIndex}-${missionItem.id}`"
            class="mission-item"
          >
            <nuxt-link :to="`/missions/${missionItem.id}`">{{
              missionItem.name
            }}</nuxt-link>
            <div>{{ status[missionItem.status] }}</div>
          </li>
        </ul>
      </div>
    </div>
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

<style>
.missions {
  padding-bottom: 30px;
}

.missions .missions-header {
  position: sticky;
  top: 0;
  z-index: 2;

  padding: 30px 0 15px;

  background: #eee;
  border-bottom: 1px solid #ddd;
}

.missions .missions-header > .missions-filter {
  display: flex;
  align-items: center;
}

.missions .missions-header > .missions-filter > div {
  padding-right: 10px;
}

.missions .missions-header > .missions-filter > select {
  padding: 10px;

  border: 1px solid #999;
}

.missions .missions-header > .missions-list-header {
  display: flex;
  justify-content: space-between;

  padding-top: 15px;

  text-transform: uppercase;
  font-weight: 500;
}

.missions .missions-list > .mission-item {
  display: flex;
  justify-content: space-between;

  padding-top: 15px;

  font-weight: 300;
}
</style>
