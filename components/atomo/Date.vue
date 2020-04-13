<template>
  <div class="date" :class="{ horizontal: horizontal }">
    <div class="validity">
      <p>
        <img src="/svg/calendario.svg" alt="validade" title="Vencimento" />
        <span class="date">{{ deadline }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import date from "~/functions/date";

export default {
  name: "Date",
  props: {
    dueDate: Object,
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    deadline() {
      if (!this.dueDate) return "Sem vencimento";
      return date.timestampToDate(this.dueDate.available_at);
    },
  },
};
</script>

<style scoped>
.date {
  margin-top: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-weight: 700;
  padding-bottom: 10px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
}
.date img {
  opacity: 0.4;
  height: 40px;
}

.date .validity {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin-left: 10px;
}
</style>
