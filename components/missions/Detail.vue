<template>
  <div v-if="mission" class="detail">
    <n-link to="/">
      <div class="back">
        <img src="/svg/return.svg" alt="Voltar" title="Voltar" />
      </div>
    </n-link>
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

  .back
    display: flex
    justify-content: center
    align-items: center
    position: fixed
    right: 0
    top: 0
    width: 50px
    height: 50px
    background-color: rgba(white, .01)
    border: 1px solid rgba(white, .05)
    border-radius: 0 0 0 100%

    @media (min-width: 768px)
      width: 80px
      height: 80px

    img
      margin-left: 10px
      margin-bottom: 10px
      height: 20px
      opacity: .4

      @media (min-width: 768px)
        height: 30px

  h1
    padding: 0 30px
    text-align: center

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
