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
  width: 340px
  background-color: rgba(white, .05)
  display: flex
  flex-direction: column
  align-items: center
  margin: 20px
  padding: 20px 30px
  border-radius: 12px
  margin-top: 60px
  color: white

  &:hover
    transform: translateY(-5px)

  h3
    font-weight: 700
    font-size: 24px
</style>
