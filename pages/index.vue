<template>
  <main>
    <header>
      <h1>Minhas Missões</h1>
      <v-filter @changed="filterMissions" />
    </header>

    <div class="cards">
      <card v-for="mission in filteredMissions" :key="mission.id" :mission="mission" />
    </div>
  </main>
</template>

<script>
import vFilter from "~/components/Filter";
import Card from "~/components/MissionCard/Main";

export default {
  data() {
    return {
      missions: [],
      filteredMissions: []
    };
  },
  components: {
    vFilter,
    Card
  },
  methods: {
    async getMissions() {
      try {
        let missions = await fetch(
          "https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions"
        );
        this.missions = await missions.json();
        await this.filterMissions();
      } catch (e) {
        alert(e);
      }
    },
    filterMissions(status = "all") {
      this.filteredMissions =
        status === "all"
          ? this.missions
          : this.missions.filter(el => (el.status === status));
    }
  },
  mounted() {
    this.getMissions();
  }
};
</script>

<style lang="sass" scoped>
main
  text-align: center
  color: white

  header
    background: rgba(white, .01)
    padding: 50px 0
    display: flex
    flex-direction: column
    justify-content: center

    h1
      color: rgba(white, .4)
      font-size: 50px
      font-weight: 700
      margin-top: 0

  .cards
    max-width: 880px
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    align-items: flex-start
    margin: 0 auto
</style>
