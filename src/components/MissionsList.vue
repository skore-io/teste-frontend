<template>
  <div 
    v-for="mission in filteredMissions" 
    :key="mission"
  >
    <div 
      class="mission-template"
      :class="mode"
    >
      <div :class="setStatusLayout(mission.status)[2]" />
      <div class="tags">
        <span
          class="status"
          :class="[setStatusLayout(mission.status)[0], mode]"
        >
          {{ setStatusLayout(mission.status)[1] }}
        </span>
        <div 
          class="priority"
          :class="mode"
        >
          Prioridade
          <div 
            v-for="num in setPriority(mission.priority)[0]" 
            :key="num" 
            class="priority-circle"
          >
            <span class="red-circle" />
          </div>
          <div 
            v-for="num in setPriority(mission.priority)[1]" 
            :key="num" 
            class="priority-circle"
          >
            <span class="white-circle" />
          </div>
        </div>
      </div>
      <div class="image-wrapper">
        <img 
          :src="!mission.thumb_url ? require('../assets/rocket.png') : mission.thumb_url" 
          alt=""
        >
      </div>
      <div class="info-wrapper">
        <h1 :class="mode"> 
          {{ mission.name }}
        </h1>
        <div class="meter">
          <span 
            class="bar"
            :class="mode"
            :style="`--width: ${mission.enrollment?.percentage}%`" 
          />
        </div>
        <div class="btn">
          <router-link :to="{name: 'Mission', params: {id: mission.id} }">
            ACESSAR
          </router-link>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>

export default {
  name: 'MissionsList',

  props: {
    filteredMissions: {
      type: Object,
      default: () => {}
    },
    mode: {
      type: String,
      default: 'light'
    }
  },
  
  methods: {
    // Aplica certos estilos/layouts nas tags e no overlay dependendo do 'status' de cada 'mission'
    setStatusLayout(status) {
      switch(status) {
        case 'IN_PROGRESS':
          return ['em-andamento', 'Em Andamento', 'no-overlay']
        case 'NOT_STARTED':
          return ['nao-iniciado', 'Não Iniciada', 'no-overlay']
        case 'COMPLETED':
          return ['completa', 'Completa', 'completed-overlay']
        case 'BLOCKED':
          return ['bloqueada', 'Bloqueada', 'blocked-overlay']
      }
    },
    // Cria pequenos círculos estilizados baseado na 'priority' de cada 'mission'
    setPriority(priority) {
      const priorityGrade = priority
      const priorityLimit = 5 - priorityGrade
      return [priorityGrade, priorityLimit]
    }
  }
}
</script>

<style scoped>

  .transition {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .mission-template {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 300px;
    height: 600px;
    border-radius: 30px;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    transition: background-color 0.3s ease-in-out;
    margin: 20px;
    padding: 20px 30px;
    position: relative;
    z-index: 1;
  }

  .mission-template.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  .completed-overlay {
    width: 240px;
    height: 384px;
    border-radius: 30px;
    margin: 20px;
    padding: 20px 30px;
    background-image: url('../assets/Complete.svg');
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 50px;
    left: 10px;
  }

  .blocked-overlay {
    width: 340px;
    height: 640px;
    border-radius: 30px;
    margin: 20px;
    padding: 20px 30px;
    background-image: url('../assets/Blocked.svg');
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: -80px;
    left: -40px;
    z-index: 1;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  span.status {
    width: 100px;
    height: 35px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }

  .em-andamento {
    background: var(--tag-emAndamento-bgColor);
    color: var(--tag-emAndamento-color);
  }

  .em-andamento.dark {
    background: var(--DM-tag-emAndamento-bgColor);
    color: var(--DM-tag-emAndamento-color);
  }

  .nao-iniciado {
    background: var(--tag-naoIniciada-bgColor);
    color: var(--tag-naoIniciada-color);
  }

  .nao-iniciado.dark {
    background: var(--DM-tag-naoIniciada-bgColor);
    color: var(--DM-tag-naoIniciada-color);
  }

  .completa {
    background: var(--tag-completa-bgColor);
    color: var(--tag-completa-color);
  }

  .completa.dark {
    background: var(--DM-tag-completa-bgColor);
    color: var(--DM-tag-completa-color);
  }

  .bloqueada {
    background: var(--tag-bloqueada-bgColor);
    color: var(--tag-bloqueada-color);
  }

  .bloqueada.dark {
    background: var(--DM-tag-bloqueada-bgColor);
    color: var(--DM-tag-bloqueada-color);
  }

  div.priority {
    width: 124px;
    height: 35px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    color: var(--text-color);
  }

  div.priority.dark {
    color: var(--DM-text-color);
  }

  .priority-circle {
    display: flex;
    margin-top: 4px;
    margin-left: 3px;
  }

  span.red-circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--red-color);
  }

  span.white-circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--white-color);
  }

  .image-wrapper img {
    width: 100%;
    object-fit: contain;
    border-radius: 30px;
  }

  .info-wrapper h1 {
    font-size: 20px;
    font-weight: 400;
    color: var(--text-color);
    padding: 5px 0;
  }

  h1.dark {
    color: var(--DM-text-color);
  }

  .meter {
    display: flex;
    width: 250px;
    height: 12px;
    border-radius: 5px;
    background-color: var(--white-color);
  }

  span.bar {
    background-color: var(--bar-color);
    display: block;
    border-radius: 5px;
    width: var(--width);
  }

  span.bar.dark {
    background-color: var(--DM-bar-color);
  }

  .btn {
    width: 140px;
    height: 40px;
    padding: 10px;
    border-radius: 13px;
    margin-top: 25px;
    margin-left: 50px;
    background-color: var(--button-color);
    cursor: pointer;
    text-decoration: none;
    position: relative;
    z-index: 0;
  }

  .btn a {
    text-decoration: none;
    color: var(--white-color);
    font-family: inherit;
    font-weight: bold;
  }

</style>