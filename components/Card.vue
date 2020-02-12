<template>
  <b-card bg-variant="light" :img-src="data.thumb_url" body-class="px-2" overlay>
    <b-row class="h-100 text-center" align-content="between" no-gutters>
      <div>
        <div v-if="hasDueDate" class="bg-success text-white px-2 rounded">
          <i class="fa fa-clock-o" />
          <span>{{ formatedAvailableAt }}</span>
        </div>
      </div>
      <b-card-title class="text-muted">
        {{ data.name }}
      </b-card-title>
      <div class="w-100">
        <b-progress
          v-if="hasEnrollment"
          :value="data.enrollment.percentage"
          :variant="statusClass.variant"
          show-progress
          animated
        />
        <b-badge v-else :variant="statusClass.variant" pill>
          <i class="fa" :class="statusClass.icon" />
        </b-badge>
      </div>
    </b-row>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Card, Status, StatusCard } from '~/store'

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

    get hasDueDate (): Boolean {
      return !!this.data.due_date
    }

    get availableAt (): Date | null {
      return this.data.due_date ? new Date(this.data.due_date.available_at) : null
    }

    get formatedAvailableAt (): String {
      if (!this.availableAt) {
        return ''
      }
      const day = this.availableAt.getDate()
      const month = this.availableAt.getMonth() + 1

      return `${day}/${month}`
    }
}
</script>

<style lang="css" scoped>
  .card {
    flex: 1 0 0;
    margin-right: 15px;
    margin-left: 15px;
  }

  .card-title {
    font-size: 120%;
  }
</style>
