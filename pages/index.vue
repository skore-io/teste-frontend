<template>
    <div>
      <h1 class="title">
        Missões
      </h1>
    <div class="container">
      <Missions />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Missions from '~/components/Missions.vue'

export default {
  components: {
    Logo,
    Missions
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  text-align: center;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
