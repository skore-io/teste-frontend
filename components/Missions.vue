<template>
  <div>
    <p>Existem {{missionsPreview.length}} missions cadastradas!</p>
    <p>
      <small>Clique em uma preview para exibir seus detalhes</small>
    </p>
    <div class="container-articles">
      <mission-article v-for="preview in missionsPreview" :key="preview.id" :mission="preview">
      </mission-article>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MissionArticle from '~/components/MissionArticle.vue'

export default {
  components: {
    MissionArticle
  },
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
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  justify-items: stretch;
  padding: 0 1rem;
  gap: 0.5rem;
}
</style>
