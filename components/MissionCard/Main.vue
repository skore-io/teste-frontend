<template>
  <div class="card">
    <v-picture :url="mission.thumb_url" />
    <h3>{{mission.name}}</h3>
    <v-status :status="mission.status" />
    <v-progress :progress="mission.enrollment" />
  </div>
</template>

<script>
import vPicture from "./Picture.vue";
import vStatus from "./Status";
import vProgress from "./Progress.vue";

export default {
  props: {
    mission: {
      type: Object
    }
  },
  components: {
    vPicture,
    vStatus,
    vProgress
  }
};
</script>

<style lang="sass" scoped>
.card
  width: 380px
  background-color: rgba(white, .08)
  display: flex
  flex-direction: column
  align-items: center
  min-width: 320pxa
  margin: 20px
  padding: 20px 60px
  border-radius: 12px
  margin-top: 60px
  color: white

  &:hover
    transform: translateY(-5px)

  img
    margin-top: -60px
    margin-bottom: 20px

  h3
    font-weight: 700
    font-size: 22px
</style>
