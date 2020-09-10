<template>
  <div class="container">
    <div class="mission__header">
      <div class="mission__image">
        <img 
          src="../assets/rocket.png" 
          alt="Rocket"
        >
      </div>
      <div class="mission__data">
        <h1 :class="mode">
          {{ missionDetails.name }}
        </h1>
        <div 
          class="mission__progress"
          :class="mode"
        >
          <h5 
            class="mission__steps"
            :class="mode"
          >
            Steps:&nbsp;&nbsp;{{ missionDetails.steps.length }}
          </h5>
          <h5 
            class="mission__concluded"
            :class="mode"
          >
            Concluídos:&nbsp;&nbsp;{{ concludedSteps }}
          </h5>
          <div class="mission__progress-bar">
            <span 
              class="mission__completed-bar"
              :class="mode" 
              :style="`--width: ${missionDetails.enrollment?.percentage}%`"
            />
          </div>
        </div>
      </div>
    </div>

    <div 
      class="steps__background"
      :class="mode"
    >
      <div 
        class="step" 
        v-for="step in (missionDetails.steps.length + 1)" 
        :key="step"
      >
        <span class="step__circle" />
        <div class="step__data">
          <h3 
            class="step__count"
            :class="mode"
          >
            Step:&nbsp;&nbsp;{{ step }}/{{ (missionDetails.steps.length) }}
          </h3>
          <div 
            class="step__details"
            :class="mode"
          >
            <img 
              class="step__icon" 
              :src="setStepStatus(step)[0]" 
              :alt="`${setStepStatus(step)[1]} icon`"
            >
            <div class="step__text">
              <p 
                class="step__title"
                :class="mode"
              >
                {{ missionDetails.steps[step-1]?.name }}
              </p>
              <p 
                class="step__status"
                :class="mode"
              >
                Status:&nbsp;&nbsp;<span :class="setStepStatus(step)[2]">{{ setStepStatus(step)[1] }}</span>
              </p>
            </div>
            <div class="step__enter">
              <img 
                class="enter__icon" 
                :src="require('../assets/missionDetails/ICON-OpenBook.svg')" 
                alt="Enter"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MissionDetails',

  props: {
    missionDetails: {
      type: Object,
      default: () => {}
    },
    mode: {
      type: String,
      default: 'light'
    }
  },

  data() {
    return {
      images: [
        { completa: require('../assets/missionDetails/ICON-Completa.svg') },
        { incompleta: require('../assets/missionDetails/ICON-Incompleta.svg') },
        { naoIniciada: require('../assets/missionDetails/ICON-NaoIniciada.svg') }
      ]
    }
  },

  computed: {
    // Função para apurar o número de 'steps' concluidos
    concludedSteps() {
      const concluded = this.missionDetails.enrollment?.completed_steps
        .filter(mission => mission.status === 'COMPLETED').length
      if (!concluded) {
        return 0
      } else {
        return concluded
      }
    }
  },

  methods: {
    // Função para classificar e estilizar os 'steps' baseado no 'status'
    setStepStatus(step) {
      const stepStatus = this.missionDetails.enrollment?.completed_steps
        .filter((stepId) => stepId.step_id === this.missionDetails.steps[step-1]?.id)[0]
      if (stepStatus?.status === "COMPLETED") {
        return [this.images[0].completa, 'Completa', 'green']
      } else if (stepStatus?.status === "FAILED") {
        return [this.images[1].incompleta, 'Incompleta', 'red']
      }
      return [this.images[2].naoIniciada, 'Não Iniciada', 'blue']
    }
  }
}
</script>

<style scoped>

  .mission__header {
    display: flex;
    margin-top: 30px;
    margin-left: 20px;
  }

  .mission__header h1 {
    color: var(--text-color);
    font-size: 50px;
    font-weight: bold;
    position: relative;
    margin-left: 30px;
  }

  .mission__header h1.dark {
    color: var(--main-color);
  }

  .mission__header h1::after {
    position: absolute;
    z-index: -1;
    top: 49px;
    left: 4px;
    content: '';
    width: 75%;
    height: 15px;
    background-color: var(--main-color);
  }

  .mission__header h1.dark::after {
    background-color: var(--DM-background-color);
  }

  .mission__image img{
    width: 150px;
    height: 240px;
    object-fit: contain;
    border-radius: 30px;
  }

  .mission__progress {
    width: 320px;
    height: 80px;
    padding: 15px;
    margin-top: 30px;
    margin-left: 32px;
    border-radius: 15px;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    display: grid;
    place-self: center;
    grid-template-areas: 
      "steps concluded"
      "bar bar"
    ;
  }

  .mission__progress.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  h5.mission__steps {
    grid-area: steps;
    place-self: center;
    font-weight: bold;
    font-size: 20px;
    color: var(--text-color);
  }

  h5.mission__concluded {
    grid-area: concluded;
    place-self: center;
    font-weight: bold;
    font-size: 20px;
    color: var(--text-color);
  }

  h5.dark {
    color: var(--DM-text-color);
  }

  .mission__progress-bar {
    grid-area: bar;
    place-self: center;
    display: flex;
    width: 250px;
    height: 12px;
    border-radius: 5px;
    background-color: var(--white-color);
  }

  span.mission__completed-bar {
    background-color: var(--bar-color);
    display: block;
    border-radius: 5px;
    width: var(--width);
  }

  span.mission__completed-bar.dark {
    background-color: var(--DM-bar-color);
  }

  .steps__background {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 720px;
    border-radius: 80px;
    background-color: var(--lightBackground-color);
    margin: 30px 20px 10px 20px;
    padding: 60px 100px;
  }

  .steps__background.dark {
    background-color: var(--DM-lightBackground-color);
  }

  .step {
    display: flex;
    height: 200px;
  }

  span.step__circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 8px solid var(--main-color);
    background: var(--white-color);
    position: relative;
  }

  span.step__circle::after {
    position: absolute;
    z-index: -1;
    top: 100%;
    left: 50%;
    width: 2px;
    height: 180px;
    content: '';
    background-color: var(--background-color);
  }

  .step:last-child > span {
    width: 15px;
    height: 15px;
    margin-left: 8px;
  }

  .step:last-child > div {
    display: none;
  }

  .step:last-child > span::after {
    display: none;
  }

  .step__data {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }

  h3.step__count {
    font-weight: bold;
    font-size: 22px;
    color: var(--text-color);
  }

  h3.step__count.dark {
    color: var(--DM-text-color);
  }

  .step__details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 100px;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    border-radius: 18px;
    margin-top: 20px;
  }

  .step__details.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  .step__icon {
    width: 50px;
    object-fit: contain;
    margin-left: 20px;
    margin-right: 5px;
  }

  .step__text {
    display: flex;
    flex-direction: column;
    width: 220px;
  }

  .step__title {
    font-weight: normal;
    font-size: 20px;
    color: var(--text-color);
    padding-bottom: 5px;
  }

  .step__title.dark {
    color: var(--DM-text-color);
  }

  .step__status {
    font-weight: normal;
    font-size: 14px;
    color: var(--text-color);
  }

  .step__status.dark {
    color: var(--DM-text-color);
  }

  .step__status > span.green {
    color: var(--tag-completa-color);
    font-weight: bolder;
  }

  .step__status.dark > span.green {
    color: var(--DM-tag-completa-bgColor);
    font-weight: bolder;
  }

  .step__status > span.red {
    color: var(--red-color);
    font-weight: bolder;
  }

  .step__status.dark > span.red {
    color: var(--DM-red-color);
    font-weight: bolder;
  }

  .step__status > span.blue {
    color: var(--tag-naoIniciada-color);
    font-weight: bolder;
  }

  .step__status.dark > span.blue {
    color: var(--DM-tag-naoIniciada-bgColor);
    font-weight: bolder;
  }

  .step__enter {
    display: flex;
    justify-content: center;
    width: 80px;
    height: 100px;
    background-color: var(--main-color);
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    cursor: pointer;
  }

  .enter__icon {
    width: 40px;
    object-fit: contain;
  }

  @media screen and (max-width: 745px) {
    .steps__background {
      width: 540px;
      padding: 60px 30px;
    }
  }

  @media screen and (max-width: 580px) {
    .mission__header h1 {
      font-size: 40px;
      margin-left: 0;
    }
    .mission__header h1::after {
      top: 39px;
      left: 3px;
    }
    .mission__image img {
      display: none;
    }
    .mission__progress {
      margin-left: 0;
    }    
    .steps__background {
      width: 340px;
      padding: 60px 20px;
    }
    p.step__count {
      font-size: 20px;
    }
    .step__details {
      width: 260px;
    } 
    .step__icon {
      width: 40px;
      margin-left: 20px;
      margin-right: 8px;
    }
    .step__text {
      width: 150px;
    }
    .step__title {
      font-size: 16px;
    }
    .step__status {
      font-size: 12px;
    }
    .enter__icon {
      width: 30px;
    }
    .step__data {
      padding: 0 5px;
    }
  }

</style>