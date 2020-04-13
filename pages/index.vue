<template>
  <main>
    <header>
      <img class="logo" src="../static/png/skore-green.png" alt="logo" />
      <h1>Lista de Missões</h1>
      <v-filter />
    </header>
    <div v-if="loader" class="loader">
      <img src="/svg/loader.svg" height="80px" />
    </div>
    <div v-else class="content">
      <preview-card  v-for="mission in list" :key="keyid(mission.id)" :mission="mission" />
    </div>
  </main>
</template>

<script>
import PreviewCard from "../components/organismo/PreviewMission.vue";
import vFilter from "../components/atomo/Filter.vue";

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
    keyid(id) {
      return id + Math.round(Math.random() * 10);
    }
  },
  mounted() {
    if (!this.missions || !this.missions.length) this.fetchAll();
  }
};
</script>

<style scoped>
main {
  text-align: center;
  background-color: #c5bdbd5c;
  min-height: 938px;
}
main header {
  padding: 20px 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
}
h1 {
  font-size: 0.5em;
  margin-top: 10px;
  color: #767575;
}
@media (min-width: 768px) {
  main header {
    margin-bottom: 20px;
    padding: 50px 0;
  }
}
@media (min-width: 768px) {
  main header {
    font-size: 50px;
  }
}
img.logo {
  margin: 0 auto;
  width: 250px;
}
main .content {
  max-width: 80%;
  display: grid;
  grid-template-columns: 410px 410px 410px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin: 0 auto;
  padding-bottom: 40px;
}
@media screen and (min-width: 0px) and (max-width: 1024px) {
  main .content {
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  }
}
</style>
