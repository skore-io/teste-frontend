<template>
  <section>
    <h3>Missões</h3>
    <div class="deck">
      <v-card v-for="card in cards" :key="card.id" :data="card" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'
import VCard from '~/components/Card.vue'
import { Card } from '~/store'

  @Component({ name: 'IndexPage', components: { VCard } })
export default class IndexPage extends Vue {
    @Getter('cards') cards!: Array<Card>

    head (): MetaInfo {
      return {
        title: 'Index'
      }
    }
}
</script>

<style lang="scss" scoped>
  section {
    h3 {
      text-align: center;
    }

    padding-bottom: 3rem !important;
    padding-top: 3rem !important;

    .deck {
      display: flex;
      flex-flow: row wrap;
      padding-top: 1.5rem !important;
      border-top: 1px solid #dee2e6 !important;
    }
  }
</style>
