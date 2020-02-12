<template>
  <div class="card">
    <img class="card-img" :src="data.thumb_url">
    <div class="card-img-overlay row align-content-between">
      <div class="bg-success text-white px-2 rounded">
        <i class="fa fa-clock-o" />
        <span v-if="hasDueDate">{{ formatedAvailableAt }}</span>
      </div>
      <div class="title">
        {{ data.name }}
      </div>
      <div class="w-100">
        <b-progress v-if="hasEnrollment" :value="data.enrollment.percentage" :variant="statusClass.variant" />
        <b-badge v-else :variant="statusClass.variant" pill>
          <i class="fa" :class="statusClass.icon" />
        </b-badge>
      </div>
    </div>
  </div>
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

<style lang="scss" scoped>
  .card {
    flex: 1 0 0;
    margin-right: 15px;
    margin-left: 15px;
    text-align: center;
    color: white;
    background-color: #6c757d !important;

    .title {
      background: #0000003b;
      border-radius: 10px;
    }
  }
</style>
