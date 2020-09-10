<template>
  <h1 
    id="missions" 
    :class="mode"
  >
    MISSÕES
  </h1>
  <div 
    class="filter-wrapper"
    :class="mode"
  >
    <input
      type="radio"
      name="Filter"
      v-model="selectedStatus" 
      value="ALL"
      id="todas"
    > 
    <p>
      <label for="todas">Todas</label>
    </p> 
    <input
      type="radio"
      name="Filter"
      v-model="selectedStatus" 
      value="IN_PROGRESS"
      id="em-andamento"
    > 
    <p>
      <label for="em-andamento">Em Andamento</label>
    </p> 
    <input
      type="radio"
      name="Filter"
      v-model="selectedStatus" 
      value="COMPLETED"
      id="completa"
    > 
    <p>
      <label for="completa">Completa</label>
    </p> 
    <input
      type="radio"
      name="Filter"
      v-model="selectedStatus" 
      value="NOT_STARTED"
      id="nao-iniciada"
    > 
    <p>
      <label for="nao-iniciada">Não Iniciada</label>
    </p> 
    <input
      type="radio"
      name="Filter"
      v-model="selectedStatus" 
      value="BLOCKED"
      id="bloqueada"
    > 
    <p>
      <label for="bloqueada">Bloqueada</label>
    </p>    
  </div>
  <div class="list-wrapper">
    <MissionsList 
      :filtered-missions="filteredMissions"
      :mode="mode"
    />
  </div>
</template>

<script>
import MissionsList from './MissionsList';

export default {
  name: 'MissionsFilter',
  components: {
    MissionsList
  },

  data() {
    return {
      selectedStatus: "ALL",
    }
  },

  props: {
    mode: {
      type: String,
      default: 'light'
    },
    missions: {
      type: Array,
      default: () => []
    }
  },
  
  computed: {
    // Função para filtrar as 'missions' por 'status'
    filteredMissions() {
      const status = this.selectedStatus;
      if (status === "ALL") {
        return this.missions
      } else {
        return this.missions.filter(mission => {
          return mission.status === status;
        })
      }
    }
  }
}
</script>

<style scoped>

  h1#missions {
    color: var(--title-color);
    font-weight: bold;
    font-size: 60px;
    margin-top: 30px;
    margin-left: 20px;
    position: relative;
  }

  h1#missions.dark {
    color: var(--main-color);
  }

  h1#missions::before {
    position: absolute;
    top: 59px;
    content: '';
    width: 280px;
    height: 10px;
    background-color: var(--background-color);
  }

  h1#missions.dark::before {
    background-color: var(--DM-background-color);
  }

  .filter-wrapper {
    height: 60px;
    width: 680px;
    margin: 35px 0 35px 20px;
    padding: 20px 40px;
    border-radius: 20px;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    transition: background-color 0.3s ease-in-out;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: inherit;
    font-weight: bold;
    font-size: 15px;
    color: var(--text-color);
  }

  .filter-wrapper.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
    color: var(--DM-text-color);
  }

  input[type="radio"] {
    margin-right: -25px;
    appearance: none;
    background-color: var(--white-color);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
  }

  input[type="radio"]:checked {
    background-color: var(--black-color);
  }

  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media screen and (max-width: 720px) {
    .filter-wrapper {
      width: 660px;
    }   
  }
  
  @media screen and (max-width: 696px) {
    .filter-wrapper {
      display: grid;
      justify-self: start;
      grid-template-columns: 1fr 4fr;
      width: 180px;
      height: 200px;
      padding: 20px 10px;
    }

    input[type="radio"] {
      margin-right: 0;
    }
  }

</style>