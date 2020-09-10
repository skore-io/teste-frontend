<template>
  <div class="container">
    <div v-if="loading">
      <Shimmer :mode="mode" />
    </div>
    <div v-else>
      <Header 
        @toggle="toggleTheme()" 
        :mode="mode" 
      />
      <MissionsFilter 
        :mode="mode"
        :missions="missions"
      />    
    </div>
  </div>
  <router-view />
</template>

<script>
import Shimmer from '../components/Shimmer';
import Header from '../components/Header';
import MissionsFilter from '../components/MissionsFilter';
import axios from 'axios';

export default {
  name: 'Missions',
  components: {
    Shimmer,
    Header,
    MissionsFilter,
  },

  data() {
    return {
      mode: 'light',
      missions: [],
      loading: true
    }
  },

  async created() {
    // Fetch no endpoint utilizando axios
    const response = await axios.get('https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions')
    this.missions = response.data
    this.loading = false 
  },

  // DARK/LIGHT TOGGLE MODE
  methods: {
    toggleTheme() {
      localStorage.setItem('mode', (localStorage.getItem('mode') || 'light') === 'light' ? 'dark' : 'light');
      localStorage.getItem('mode') === 'dark' ? 
      [this.mode = 'dark', document.body.classList.add('dark')] : 
      [this.mode = 'light', document.body.classList.remove('dark'), document.body.classList.add('light')]
    } 
  },
  
  mounted() {
    if (localStorage.mode === 'dark') {
      this.mode = 'dark' 
      document.body.classList.add('dark')
    } 
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,400;0,700;1,500&display=swap');

  :root {
    --body-color: #f7f7f7;
    --DM-body-color: #333333;

    --main-color: #00CEB2;

    --title-color: #078473;

    --text-color: #5d5d5d;
    --DM-text-color: #B5B5B5;

    --background-color: rgba(219, 218, 218, 0.6);
    --DM-background-color: rgba(67, 67, 67, 0.6);

    --lightBackground-color: rgba(219, 218, 218, 0.4);
    --DM-lightBackground-color: rgba(67, 67, 67, 0.4);

    --box-shadow: 0px 5px 5px 1px rgba(169, 169, 169, 0.7);
    --DM-box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.7);

    --button-color: #078473;

    --tag-emAndamento-color: #7D5F00;
    --tag-emAndamento-bgColor: rgba(255, 219, 104, 0.5);

    --DM-tag-emAndamento-color: #5d4800;
    --DM-tag-emAndamento-bgColor: rgba(255, 219, 104);

    --tag-naoIniciada-color: #004EB2;
    --tag-naoIniciada-bgColor: rgba(138, 186, 248, 0.5);

    --DM-tag-naoIniciada-color: #002c66;
    --DM-tag-naoIniciada-bgColor: rgba(138, 186, 248);

    --tag-completa-color: #006A0B;
    --tag-completa-bgColor: rgba(121, 251, 135, 0.5);

    --DM-tag-completa-color: #004d08;
    --DM-tag-completa-bgColor: rgba(121, 251, 135);

    --tag-bloqueada-color: #505050;
    --tag-bloqueada-bgColor: rgba(158, 158, 158, 0.5);

    --DM-tag-bloqueada-color: #242424;
    --DM-tag-bloqueada-bgColor: rgba(158, 158, 158);

    --red-color: #af0101;
    --DM-red-color: rgb(255, 167, 167);

    --white-color: white;
    --black-color: black;

    --bar-color: #8AE993;
    --DM-bar-color: #55d862;

    --shimmer-color: rgb(219, 218, 218);
    --DM-shimmer-color: rgb(102, 102, 102);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Merriweather Sans', sans-serif;
    max-width: 1050px;
    margin: 0 auto;
    background-color: var(--body-color);
    transition: background-color 0.3s ease-in-out;
  }

  body.dark {
    background-color: var(--DM-body-color);
  }

  .container {
    display: flex;
    flex-direction: column;
  }

</style>