<template>
  <section>
    <nuxt-link :to="{ name: 'index'}">Voltar</nuxt-link>
    <template v-if="selectedMission">
      <div>
        <h3>{{selectedMission.name}}</h3>
        <p>
          <strong>Status: {{selectedMission.status}}</strong>
        </p>
        <img :src="selectedMission.thumb_url" alt="Thumbnail da Mission" />
        <article>
          <h4>Visão do Curso</h4>
          <ul>
            <li v-for="step in selectedMission.steps" :key="step.id">{{step.name}}</li>
          </ul>
        </article>
        <article v-if="enrollment">
          <h4>Sua inscrição</h4>
          <meter min="0" max="100" :value="enrollment.percentage"></meter>
        </article>
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
    }
  },
  async mounted() {
    await this.fetchDetailed(this.id);
  }
};
</script>

<style>
</style>
