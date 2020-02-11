<template>
  <b-card bg-variant="light" :img-src="data.thumb_url" body-class="px-2" overlay>
    <b-row class="h-100 text-center" align-content="between" no-gutters>
      <div />
      <div>{{ data.name }}</div>
      <div class="w-100">
        <b-progress v-if="data.enrollment" :value="data.enrollment.percentage" variant="success" show-progress animated />
        <b-button v-else pill variant="success">
          {{ data.status }}
        </b-button>
      </div>
    </b-row>
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
