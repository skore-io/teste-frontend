<template>
  <main>
    <header>
      <h1>Minhas Missões</h1>
      <v-filter @changed="filterMissions" />
    </header>

    <div class="content">
      <img v-if="loading" src="/svg/loader.svg" height="50px" alt="carregando..." />
      <preview-card
        v-else
        v-for="mission in filteredMissions"
        :key="keygen(mission.id)"
        :mission="mission"
      />
    </div>
  </main>
</template>

<script>
import vFilter from "~/components/Filter";
import PreviewCard from "~/components/missions/Preview";

import missionsHelper from "~/functions/missionsHelper";

export default {
  data() {
    return {
      missions: [],
      filteredMissions: [],
      loading: false
    };
  },
  components: {
    vFilter,
    PreviewCard
  },
  methods: {
    keygen(id) {
      return id + Math.round(Math.random() * 10);
    },
    async getMissions() {
      this.loading = true;

      try {
        let missions = await fetch(
          "https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions"
        );
        missions = await missions.json();
        this.missions = missionsHelper.sortByStatus(missions);
        await this.filterMissions();
      } catch (e) {
        console.log(e);
      }

      this.loading = false;
    },
    filterMissions(status = "all") {
      this.filteredMissions = missionsHelper.filterByStatus(
        this.missions,
        status
      );
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
    padding: 20px 0
    display: flex
    flex-direction: column
    justify-content: center
    margin-bottom: 30px

    @media (min-width: 768px)
      margin-bottom: 20px
      padding: 50px 0

    h1
      color: rgba(white, .4)
      font-size: 28px
      font-weight: 700
      margin-top: 0
      margin-bottom: 0

      @media (min-width: 768px)
        font-size: 50px

  .content
    max-width: 880px
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    align-items: flex-start
    margin: 0 auto
</style>
