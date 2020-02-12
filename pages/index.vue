<template>
  <b-container>
    <section class="py-5">
      <h3>Missões</h3>
      <div class="border-top py-2" />
      <div class="deck">
        <v-card v-for="card in cards" :key="card.id" :data="card" />
      </div>
    </section>
  </b-container>
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
  .deck{
    display: flex;
    flex-flow: row wrap;
  }
</style>
