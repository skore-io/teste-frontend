<template>
  <b-container>
    <div>
      <logo />
      <h1>teste-frontend</h1>
      <h2>My mind-blowing Nuxt.js project</h2>
      <div>
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'
import Logo from '~/components/Logo.vue'

@Component({ name: 'IndexPage', components: { Logo } })
export default class IndexPage extends Vue {
  head (): MetaInfo {
    return {
      title: 'Index'
    }
  }
}
</script>
