<template>
  <p v-if="!mission">Fetching post...</p>

  <div v-else>
    <p>{{ mission.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mission: undefined
    };
  },

  mounted() {
    this.getMission();
  },

  methods: {
    async getMission() {
      this.mission = await this.$axios.$get(
        `https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions/${this.$route.params.id}`
      );
    }
  }
};
</script>

<style></style>
