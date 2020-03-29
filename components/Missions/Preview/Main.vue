<template>
  <n-link :to="`/mission/${mission.id}`">
    <div class="card">
      <v-picture :url="mission.thumb_url" />
      <h3>{{mission.name}}</h3>
      <v-status :status="mission.status" />
      <v-due-date :due-date="mission.due_date" />
      <v-progress :status="mission.status" :progress="mission.enrollment || null" />
    </div>
  </n-link>
</template>

<script>
import vPicture from "./Picture.vue";
import vStatus from "./Status";
import vDueDate from "./DueDate";
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
    vDueDate,
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
  padding: 20px 30px 0
  border-radius: 8px
  margin-top: 60px
  color: white
  animation: fade .5s

  &:hover
    transform: translateY(-5px)

  h3
    margin: 10px 0
    font-weight: 700
    font-size: 24px

a
  text-decoration: none

@keyframes fade
  from
    margin-top: 0
    opacity: 0
  to
    opacity: 1
</style>
