<template>
  <main>
    <b-container>
      <nuxt />
    </b-container>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'

@Component({ name: 'DefaultLayout' })
export default class DefaultLayout extends Vue {
  head (): MetaInfo {
    return {
      titleTemplate: 'FrontEnd Test - %s - SkoreIO'
    }
  }
}
</script>

<style scoped>
  main, .container {
    min-height: 100vh;
    background-color: aliceblue;
  }
</style>
