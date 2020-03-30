<template>
  <main>
    <header>
      <h1>Minhas Missões</h1>
      <v-filter />
    </header>

    <div class="content">
      <img v-if="loader" src="/svg/loader.svg" height="50px" alt="carregando..." />
      <preview-card v-else v-for="mission in list" :key="keygen(mission.id)" :mission="mission" />
    </div>
  </main>
</template>

<script>
import vFilter from "~/components/Filter";
import PreviewCard from "~/components/missions/Preview";

import { mapActions, mapState, mapGetters } from "vuex";

export default {
  components: {
    vFilter,
    PreviewCard
  },
  computed: {
    ...mapState(["loader", "missions"]),
    ...mapGetters(["list"])
  },
  methods: {
    ...mapActions(["fetchAll"]),
    keygen(id) {
      return id + Math.round(Math.random() * 10);
    }
  },
  mounted() {
    if (!this.missions || !this.missions.length) this.fetchAll();
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
