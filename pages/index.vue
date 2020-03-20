<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        teste-frontend
      </h1>
      <h2 class="subtitle">
        Teste frontend
      </h2>
      <div class="links">
        <nuxt-link
          to="/missions"
          class="button--green"
        >
          Missions
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
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
