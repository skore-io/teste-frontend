<template>
  <div v-if="mission">
    <h1>{{mission.name}}</h1>

    <v-card>
      <v-picture :url="mission.thumb_url" />

      <h2>Etapas</h2>

      <div class="steps">
        <v-step v-for="step in mission.steps" :key="step.id" :step="step" />
      </div>

      <div>
        <v-status :status="mission.status" />
        <v-due-date :due-date="mission.due_date" />
      </div>

      <v-progress :status="mission.status" :progress="mission.enrollment || null" />
    </v-card>
  </div>
</template>

<script>
import vCard from "./shared/Card";
import vPicture from "./shared/Picture";
import vStep from "./shared/Step";
import vStatus from "./shared/Status";
import vProgress from "./shared/Progress";
import vDueDate from "./shared/DueDate";

export default {
  components: {
    vCard,
    vPicture,
    vStep,
    vStatus,
    vDueDate,
    vProgress
  },
  props: {
    mission: Object
  }
};
</script>

<style lang="sass" scoped>
</style>
