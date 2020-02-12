<template>
  <div class="box">
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
      titleTemplate: 'FrontEnd Test - %s - SkoreIO'
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
