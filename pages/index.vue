<template>
  <main>
    <h1>Minhas missões</h1>
    <v-filter @changed="getMissions" />

    <div class="cards">
      <card v-for="mission in missions" :key="mission.id" :mission="mission" />
    </div>
  </main>
</template>

<script>
import vFilter from "~/components/Filter";
import Card from "~/components/MissionCard/Main";

export default {
  data() {
    return {
      missions: []
    };
  },
  components: {
    vFilter,
    Card
  },
  methods: {
    async getMissions(statuses = null) {
      try {
        let missions = await fetch(
          "https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions"
        );
        this.missions = await missions.json();

        if (this.missions && statuses)
          this.missions = this.missions.filter(el =>
            statuses.includes(el.status)
          );
      } catch (e) {
        alert(e);
      }
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

  h1
    color: rgba(white, .4)
    font-size: 50px
    font-weight: 700

  .cards
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    align-items: flex-start
    margin: 0 auto
</style>
