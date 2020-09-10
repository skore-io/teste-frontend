<template>
  <div class="container">
    <div v-if="loading">
      <ShimmerDetails :mode="mode" />
    </div>
    <div v-else>
      <Header
        @toggle="toggleTheme()"  
        :mode="mode" 
      />
      <MissionDetails 
        :mode="mode"
        :mission-details="missionDetails"
      />   
    </div>    
  </div>
  <router-view />
</template>

<script>
import ShimmerDetails from '../components/ShimmerDetails';
import Header from '../components/Header';
import MissionDetails from '../components/MissionDetails';
import axios from 'axios'

export default {
  name: 'Mission',
  components: {
    ShimmerDetails,
    Header,
    MissionDetails,
  },

  data() {
    return {
      mode: 'light',
      missionDetails: {},
      loading: true
    }
  },

  props: {
    id: {
      type: String,
      default: ''
    }
  },

  async created() {
    // Fetch no endpoint(por id) utilizando axios
    const response = await axios.get(`https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions/${this.id}`)
    this.missionDetails = await response.data
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

</style>