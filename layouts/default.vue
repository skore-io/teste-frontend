<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'

  @Component({ name: 'DefaultLayout' })
export default class DefaultLayout extends Vue {
  head (): MetaInfo {
    return {
      titleTemplate: 'FrontEnd Test - %s - SkoreIO',
      bodyAttrs: {
        style: 'background-color: aliceblue'
      }
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    max-width: 1140px;
  }
</style>
