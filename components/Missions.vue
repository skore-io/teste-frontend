<template>
  <div>
    <p>Existem {{missionsPreview.length}} missions cadastradas!</p>
    <p>
      <small>Clique em uma preview para exibir seus detalhes</small>
    </p>
    <div class="container-articles">
      <article v-for="mission in missionsPreview" :key="mission.id">
        <h3>
          {{mission.name}}
          <small>({{mission.status}})</small>
        </h3>
        <img :src="mission.thumb_url" alt="Thumbnail da Mission" />
      </article>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["missionsPreview"])
  },
  methods: {
    ...mapActions(["fetchPreviews"])
  },
  async mounted() {
    await this.fetchPreviews();
  }
};
</script>

<style scoped>
.container-articles {
  display: flex;
  flex-direction: row;
}
</style>
