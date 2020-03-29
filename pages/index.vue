<template>
  <main>
    <card v-for="mission in missions" :key="mission.id" :mission="mission" />
  </main>
</template>

<script>
import Card from "~/components/MissionCard/Main.vue";

export default {
  data() {
    return {
      missions: []
    };
  },
  components: {
    Card
  },
  methods: {
    async getMissions() {
      try {
        let missions = await fetch(
          "https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions"
        );
        this.missions = await missions.json();
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
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  align-items: flex-start
  margin: 0 auto
</style>
