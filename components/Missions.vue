<template>
  <div>
    <p>Existem {{missionsPreview.length}} missions cadastradas!</p>
    <p>
      <small>Clique em uma preview para exibir seus detalhes</small>
    </p>
    <div class="filter-bar">
      <select name="filtro status" id="status-picker" v-model="filtroStatus">
        <option value>Escoha um Status</option>
        <option v-for="status in statusPresentes" :value="status" :key="status">{{status}}</option>
      </select>
      <button @click="clearFiltro">Limpar Filtro</button>
    </div>
    <div class="container-articles">
      <mission-article v-for="preview in missionsFiltradas" :key="preview.name" :mission="preview"></mission-article>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MissionArticle from "~/components/MissionArticle.vue";

export default {
  data() {
    return {
      filtroStatus: ""
    };
  },
  components: {
    MissionArticle
  },
  computed: {
    ...mapState(["missionsPreview"]),
    statusPresentes() {
      const statusArray = this.missionsPreview.map(m => m.status);
      return [...new Set(statusArray)];
    },
    missionsFiltradas() {
      if (this.filtroStatus) {
        return this.missionsPreview.filter(m => m.status === this.filtroStatus);
      }

      return this.missionsPreview;
    }
  },
  methods: {
    ...mapActions(["fetchPreviews"]),
    clearFiltro() {
      this.filtroStatus = "";
    }
  }
};
</script>

<style scoped>
.container-articles {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  justify-items: stretch;
  padding: 0 1em;
  gap: 0.5rem;
}

.filter-bar {
  display: inline-flex;
  height: 2em;
  padding: 0 1rem;
  margin-bottom: 1em;
}

.filter-bar > * {
  margin-right: 1em;
}

button {
  border: 1px solid lightslategray;
  background-color: lightgray;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
}

</style>
