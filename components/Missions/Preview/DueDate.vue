<template>
  <div class="due-date">
    <img src="/icons/deadline.svg" alt="validade" />
    <b>Validade</b>
    {{deadline}}
  </div>
</template>

<script>
import dateHelper from "~/functions/dateHelper";

export default {
  props: {
    dueDate: Object
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

  img
    opacity: .4
    height: 40px
</style>
