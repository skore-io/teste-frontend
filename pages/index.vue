<template>
  <main>
    <div class="container">
      <card v-for="mission in missions" :key="mission.id" :mission="mission" />
    </div>
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
  font-family: 'Source Sans Pro', sans-serif
  background-color: rgb(17, 17, 22)
  min-height: 100vh

  .container
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    align-items: flex-start
    width: 980px
    margin: 0 auto
</style>
