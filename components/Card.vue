<template>
  <div class="tag">
    <img :src="picture" alt="">
    <div class="tag-content">
      <div class="chip" :style="{ opacity: hasDueDate ? 1 : 0}">
        <i class="fa fa-calendar" />
        <span v-if="hasDueDate">{{ formatedAvailableAt }}</span>
      </div>
      <div class="title">
        {{ data.name }}
      </div>
      <div class="counter" :title="data.status">
        <div v-if="hasEnrollment" class="progress">
          <div class="progress-bar" :style="{width: `${data.enrollment.percentage}%`}" />
        </div>
        <div v-else class="chip" :class="statusClass.variant">
          <i class="fa" :class="statusClass.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { CardInterface, Status, StatusCard } from '~/store'

  @Component({ name: 'VCard' })
export default class VCard extends Vue {
    @Prop({ type: Object, required: true }) readonly data!: CardInterface

    get hasEnrollment (): Boolean {
      return !!this.data.enrollment
    }

    get picture (): string {
      return this.data.thumb_url || 'https://www.fillmurray.com/150/240'
    }

    get statusClass (): StatusCard {
      switch (this.data.status) {
        case Status.BLOCKED:
          return {
            variant: 'bg-danger',
            icon: 'fa-lock'
          }
        case Status.COMPLETED:
          return {
            variant: 'bg-success',
            icon: 'fa-check'
          }
        case Status.IN_PROGRESS:
          return {
            variant: 'bg-warning',
            icon: 'fa-tasks'
          }
        case Status.NOT_STARTED:
          return {
            variant: 'bg-dark',
            icon: 'fa-clock-o'
          }
        default:
          return {
            variant: 'bg-transparent',
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
  .tag {
    flex: 1 0 0;
    margin-right: 15px;
    margin-left: 15px;
    text-align: center;
    color: white;
    background-color: #6c757d !important;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    border-radius: 0.25rem;
    border: black 1px solid;

    img {
      flex-shrink: 0;
      width: 100%;
    }

    .tag-content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 1.25rem .25rem;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between !important;

      .title {
        background: #0000003b;
        border-radius: 10px;
      }

      .counter {
        width: 100% !important;
      }
    }
  }

  .chip {
    background-color: #006600 !important;
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    border-radius: 0.25rem;
  }

  .progress {
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: #e9ecef;
    border-radius: 0.25rem;

    .progress-bar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-color: #007bff;
    }
  }

  .bg-danger {
    background-color: red !important;
  }

  .bg-dark {
    background-color: black !important;;
  }

  .bg-warning {
    background-color: yellow !important;;
  }

  .bg-success {
    background-color: green !important;;
  }

  .bg-transparent {
    background-color: transparent;
  }

</style>
