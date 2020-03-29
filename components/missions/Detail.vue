<template>
  <div v-if="mission" class="detail">
    <h1>{{mission.name}}</h1>

    <v-card>
      <v-picture :url="mission.thumb_url" />

      <h2>Etapas</h2>

      <div class="steps">
        <v-step
          v-for="step in mission.steps"
          :key="step.id"
          :step="step"
          :completed-steps="completedSteps"
        />
      </div>

      <v-due-date :due-date="mission.due_date" />
      <v-status :status="mission.status" />

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
  },
  computed: {
    completedSteps() {
      return this.mission.enrollment && this.mission.enrollment.completed_steps
        ? this.mission.enrollment.completed_steps
        : [];
    }
  }
};
</script>

<style lang="sass" scoped>
.detail
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  min-height: 100vh

  .steps
    margin: 10px 0
    width: 100%
    padding: 0 30px
    background-color: rgba(black, .15)

  h2
    font-size: 30px
    margin-top: 10px
    margin-bottom: 0

  .status
    margin-top: 30px
</style>
