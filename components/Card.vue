<template>
  <b-card bg-variant="light" :img-src="data.thumb_url" body-class="px-2" overlay>
    <b-row class="h-100 text-center" align-content="between" no-gutters>
      <div />
      <div class="card-title">
        {{ data.name }}
      </div>
      <div class="w-100">
        <b-progress v-if="hasEnrollment" :value="data.enrollment.percentage" :variant="statusClass.variant" show-progress animated />
        <b-badge v-else :variant="statusClass.variant" pill>
          <i class="fa" :class="statusClass.icon" />
        </b-badge>
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

export interface StatusCard {
  variant: String
  icon: String
}

@Component({ name: 'VCard' })
export default class VCard extends Vue {
  @Prop({ type: Object, required: true }) readonly data!: Card

  get hasEnrollment (): Boolean {
    return !!this.data.enrollment
  }

  get statusClass (): StatusCard {
    switch (this.data.status) {
      case Status.BLOCKED:
        return {
          variant: 'danger',
          icon: 'fa-lock'
        }
      case Status.COMPLETED:
        return {
          variant: 'success',
          icon: 'fa-check'
        }
      case Status.IN_PROGRESS:
        return {
          variant: 'warning',
          icon: 'fa-tasks'
        }
      case Status.NOT_STARTED:
        return {
          variant: 'dark',
          icon: 'fa-clock-o'
        }
      default:
        return {
          variant: 'transparent',
          icon: 'fa-edit'
        }
    }
  }
}
</script>

<style scoped>

  main{
    min-height: 150px;
    background-color: palevioletred;
  }

  .card-title{
    font-size: 120%;
  }
</style>
