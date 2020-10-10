<template>
  <div class="container">
    <div class="mission-details-page">
      <p v-if="!mission">Fetching mission...</p>

      <div v-else class="mission-details">
        <div class="back-to-list">
          <nuxt-link :to="`/missions`">Voltar para listagem</nuxt-link>
        </div>

        <div class="mission-details-info">
          <div
            class="mission-thumb"
            :style="`background-image: url(${mission.thumb_url})`"
          />

          <div class="details-text">
            <p class="mission-title"><span>Missão:</span> {{ mission.name }}</p>

            <p class="mission-status">
              <span>Status da missão:</span> {{ status[mission.status] }}
            </p>
          </div>

          <div class="mission-conclusion">
            <svg height="100" width="100">
              <circle
                id="mission-progress-ring-empty"
                stroke-width="5"
                stroke="#ddd"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
            </svg>

            <div v-if="mission.enrollment">
              <svg height="100" width="100" class="mission-conclusion-full">
                <circle
                  id="mission-progress-ring-full"
                  stroke-width="5"
                  stroke="#3aaf9f"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
              </svg>

              <div class="conclusion-value">
                {{ mission.enrollment.percentage }}%
              </div>
            </div>

            <div v-else>
              <svg height="100" width="100" class="mission-conclusion-full">
                <circle
                  id="mission-progress-ring-full"
                  stroke-width="5"
                  stroke="#3aaf9f"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
              </svg>

              <div class="conclusion-value">0%</div>
            </div>
          </div>
        </div>

        <ul class="mission-steps">
          <li class="mission-steps-title">
            <div>Passos</div>
            <div>Situação</div>
          </li>

          <li
            v-for="(stepItem, stepIndex) of mission.steps"
            class="step-item"
            :key="`mission-steps-${stepItem.id}-${stepIndex}`"
          >
            <div class="step-name">{{ stepItem.name }}</div>

            <div v-if="!!mission.enrollment && !!getEnrollment(stepItem)">
              {{ enrollmentStatus[getEnrollment(stepItem).status] }}
            </div>

            <div v-else>Não iniciado</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mission: undefined,
      status: {
        IN_PROGRESS: "Em andamento",
        NOT_STARTED: "Não iniciado",
        COMPLETED: "Completo",
        BLOCKED: "Bloqueado"
      },
      enrollmentStatus: {
        COMPLETED: "Concluído",
        FAILED: "Reprovado"
      }
    };
  },

  mounted() {
    this.getMission();
  },

  methods: {
    getEnrollment(stepItem) {
      return this.mission.enrollment.completed_steps.find(completedStepItem => {
        if (stepItem.id === completedStepItem.step_id) {
          return completedStepItem;
        }
      });
    },

    async getMission() {
      this.mission = await this.$axios.$get(
        `https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions/${this.$route.params.id}`
      );

      let percent = 0;

      if (!!this.mission.enrollment) {
        percent = this.mission.enrollment.percentage;
      }

      setTimeout(() => {
        const circle = document.querySelector("#mission-progress-ring-full");
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (percent / 100) * circumference;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = offset;
      });
    }
  }
};
</script>

<style>
.mission-details-page {
  padding: 30px 0;
}

.mission-details-page .mission-details > .mission-details-info {
  display: flex;
  align-items: center;

  padding-top: 30px;
}

.mission-details-page
  .mission-details
  > .mission-details-info
  > .mission-thumb {
  width: 100px;
  height: 100px;

  background-size: cover;
  background-position: center;
  border-radius: 100%;
}

.mission-details-page .mission-details > .mission-details-info > .details-text {
  flex: 1;

  padding-left: 30px;

  line-height: 24px;
}

.mission-details-page
  .mission-details
  > .mission-details-info
  > .details-text
  > p {
  font-weight: 300;
}

.mission-details-page
  .mission-details
  > .mission-details-info
  > .details-text
  > p
  > span {
  font-weight: 500;
}

.mission-details-page
  .mission-details
  > .mission-details-info
  > .mission-conclusion {
  position: relative;

  height: 100px;
  width: 100px;
}

.mission-details-page
  .mission-details
  > .mission-details-info
  > .mission-conclusion
  svg {
  position: absolute;
  left: 0;
  top: 0;
}

.mission-details-page
  .mission-details
  > .mission-details-info
  > .mission-conclusion
  > .mission-conclusion-full {
  z-index: 2;
}

.mission-details-page
  .mission-details
  > .mission-details-info
  > .mission-conclusion
  #mission-progress-ring-full {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.mission-details-page
  .mission-details
  > .mission-details-info
  > .mission-conclusion
  .conclusion-value {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;

  height: 100px;
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: 300;
}

.mission-details-page .mission-details > .mission-steps {
  padding-top: 30px;
}

.mission-details-page .mission-details > .mission-steps > .mission-steps-title {
  display: flex;
  justify-content: space-between;

  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
}

.mission-details-page .mission-details > .mission-steps > .step-item {
  display: flex;
  justify-content: space-between;

  padding-top: 15px;

  font-weight: 300;
}
</style>
