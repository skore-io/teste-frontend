<template>
  <article v-if="mission" @click="pushDetailedMission(mission.id)">
    <h3>{{mission.name}}</h3>
    <img :src="mission.thumb_url" alt="Thumbnail da Mission" />
    <!-- <nuxt-link :to="{ name: 'missions-id', params: { id: mission.id}}">Detalhar!</nuxt-link> -->
  </article>
</template>

<script>
export default {
  props: {
    mission: {
      required: true,
      type: Object
    }
  },
  methods: {
    pushDetailedMission(missionId) {
      this.$router.push({ name: "missions-id", params: { id: missionId } });
    }
  }
};
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid grey;
  padding: 1rem;
}

img {
  height: 150px;
}
</style>
