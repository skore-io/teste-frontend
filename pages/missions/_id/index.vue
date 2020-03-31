<template>
  <div>
    <nuxt-link :to="{ name: 'index'}">Voltar</nuxt-link>
    <p>{{selectedMission}}</p>
  </div>
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
    ...mapActions(['fetchDetailed'])
  },
  computed: {
    ...mapState(['selectedMission'])
  },
  async mounted() {
    await this.fetchDetailed(this.id)
  }
};
</script>

<style>
</style>
