<template>
  <div style="background: aliceblue">
    <b-container>
      <nuxt />
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'

@Component({ name: 'DefaultLayout' })
export default class DefaultLayout extends Vue {
  head (): MetaInfo {
    return {
      titleTemplate: 'FrontEnd Test - % - SkoreIO'
    }
  }
}
</script>
