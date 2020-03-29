<template>
  <n-link :to="`/mission/${mission.id}`">
    <v-card>
      <v-picture :url="mission.thumb_url" />
      <h3>{{mission.name}}</h3>
      <v-status :status="mission.status" />
      <v-due-date :due-date="mission.due_date" />
      <v-progress :status="mission.status" :progress="mission.enrollment || null" />
    </v-card>
  </n-link>
</template>

<script>
import vCard from "./shared/Card";
import vPicture from "./shared/Picture";
import vStatus from "./shared/Status";
import vDueDate from "./shared/DueDate";
import vProgress from "./shared/Progress";

export default {
  props: {
    mission: {
      type: Object
    }
  },
  components: {
    vCard,
    vPicture,
    vStatus,
    vDueDate,
    vProgress
  }
};
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
