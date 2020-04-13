<template>
  <div class="step">
    <div v-if="status === 'NOT_STARTED'">
      <img
        class="status-imag"
        src="../../static/svg/alerta .svg"
        alt="feito"
        title="Feito"
      />
    </div>
    <div v-else-if="status === 'COMPLETED'">
      <img
        class="status-imag"
        src="../../static/png/verifica.png"
        alt="feito"
        title="Feito"
      />
    </div>
    <div v-else>
      <img
        class="status-imag"
        src="../../static/svg/alerta .svg"
        alt="feito"
        title="Feito"
      />
    </div>
    <div class="details">
      {{ status }}
      <h2>{{ step.name }}</h2>
      <status type="step" :status="status" />
    </div>
  </div>
</template>

<script>
import Status from "../atomo/Status.vue";

import { mapGetters } from "vuex";

export default {
  name: "Step",
  props: {
    step: Object,
  },
  components: {
    Status,
  },
  computed: {
    ...mapGetters(["missionCompletedSteps"]),
    status() {
      let completed = this.missionCompletedSteps.find(
        (el) => el.step_id === this.step.id
      );
      return completed ? completed.status : "NOT_STARTED";
    },
  },
};
</script>

<style scoped>
.step {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 20px 0;
}

.step .details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.status-imag {
  width: 85px;
  margin: 10px 10px 0px 25px;
}
.step h2 {
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 5px;
}
@media (min-width: 768px) {
  .step {
    font-size: 22px;
  }
}
</style>
