<template>
  <b-card bg-variant="info" :img-src="data.thumb_url" tag="article" overlay>
    <b-card-text>{{ data.name }}</b-card-text>

    <b-button href="#" variant="primary">
      Go somewhere
    </b-button>
  </b-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

export interface Card {
    id: String
    company_id: String
    name: String
    thumb_url: String | null
    priority: Number,
    due_date: DueDate | null
    status: String
    enrollment?: Enrollment
  }

export interface DueDate {
    available_at: Number
  }

export interface Enrollment {
    id: String
    percentage: Number
  }

export enum Status {
    IN_PROGRESS = 'IN_PROGRESS',
    NOT_STARTED = 'NOT_STARTED',
    COMPLETED = 'COMPLETED',
    BLOCKED = 'BLOCKED'
  }

@Component({ name: 'VCard' })
export default class VCard extends Vue {
  @Prop({ type: Object, required: true }) readonly data!: Card
}
</script>

<style scoped>

  main{
    min-height: 150px;
    background-color: palevioletred;
  }
</style>
