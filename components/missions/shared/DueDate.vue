<template>
  <div class="due-date" :class="{horizontal: horizontal}">
    <img src="/icons/deadline.svg" alt="validade" />
    <div class="data">
      <b>Validade</b>
      {{deadline}}
    </div>
  </div>
</template>

<script>
import dateHelper from "~/functions/dateHelper";

export default {
  props: {
    dueDate: Object,
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    deadline() {
      if (!this.dueDate) return "Sem vencimento";
      return dateHelper.timestampToDate(this.dueDate.available_at);
    }
  }
};
</script>

<style lang="sass" scoped>
.due-date
  margin-top: 20px
  display: flex
  flex-direction: column
  justify-content: center
  text-align: center

  &.horizontal
    flex-direction: row

    .data
      align-items: flex-start
      margin-left: 10px

  .data
    display: flex
    flex-direction: column

  img
    opacity: .4
    height: 40px
</style>
