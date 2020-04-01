<template>
  <section>
    <template v-if="selectedMission">
      <div class="mission-details-container">
        <div class="thumb">
          <img :src="selectedMission.thumb_url" alt="Thumbnail da Mission" />
        </div>
        <div class="header">
          <article>
            <h3>{{selectedMission.name}}</h3>
            <p>Status: {{selectedMission.status}}</p>
            <p>Prioridade: {{selectedMission.priority}}</p>
          </article>
          <article>
            <h4>Composição da Mission</h4>
            <ul>
              <li v-for="step in selectedMission.steps" :key="step.id">{{step.name}}</li>
            </ul>
          </article>
          <article v-if="selectedMission.due_date">
            <h4>Limite</h4>
            <p>Esta mission possui um limite para ser feita</p>
            <p>{{this.dueDate}}</p>
          </article>
        </div>
        <div class="mission-body-container">
          <h4>Sua inscrição</h4>
          <article>
            <div v-if="enrollment">
              <p>
                Seu progresso:
                <meter min="0" max="100" :value="enrollment.percentage"></meter>
              </p>
              <!-- TODO: Juntar estas informações com os steps da Mission -->
              <ul>
                <li v-for="step in enrollment.completed_steps" :key="step.id">{{step.status}}</li>
              </ul>
            </div>
            <div v-else>
              <p>Você não está inscrito nesta mission!</p>
            </div>
          </article>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="empty-message">
        <p>
          <em>Não foi possível localizar a mission {{this.id}}</em>
        </p>
        <p>
          Volte à página inicial e tente novamente mais tarde
        </p>
        <p>
          <nuxt-link :to="{ name: 'index'}">Voltar à Home</nuxt-link>
        </p>
      </div>
    </template>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    ...mapActions(["fetchDetailed"])
  },
  computed: {
    ...mapState(["selectedMission"]),
    enrollment() {
      return this.selectedMission.enrollment;
    },
    dueDate() {
      if (this.selectedMission.due_date) {
        return new Date(this.selectedMission.due_date.available_at).toLocaleDateString()
      }
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("fetchDetailed", params.id);
  }
};
</script>

<style scoped>
section {
  padding: 0 2rem;
}

.mission-details-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
}

.header {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: row;
  place-items: flex-start;
}

.header > * {
  margin: 1rem;
}

.thumb {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  place-content: center;
}

img {
  border: 1px solid black;
}

.mission-body-container {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
  flex-direction: column;
  place-items: flex-start;
}

.empty-message {
  height: 90vh;
  width: 90vw;
  place-items: center;
}

.empty-message > * {
  margin-top: 2rem;
}

.empty-message > p {
  text-align: center;
}

a {
  border: 1px solid lightslategray;
  background-color: lightgray;
  color: black;
  text-align: center;
  text-decoration: none;
  padding: 12px 32px;
  display: inline-block;
  font-size: 16px;
}
</style>
