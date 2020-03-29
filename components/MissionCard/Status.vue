<template>
  <div class="status">
    <div class="circle" :style="`background-color: ${color}`"></div>
    {{name}}
  </div>
</template>

<script>
const STATUS_MAP = {
  COMPLETED: {
    color: "#29ad5b",
    name: "concluído"
  },
  IN_PROGRESS: {
    color: "#1077f7",
    name: "em andamento"
  },
  NOT_STARTED: {
    color: "#343434",
    name: "não iniciado"
  },
  BLOCKED: {
    color: "#de1a1a",
    name: "bloqueado"
  }
};

export default {
  props: {
    status: String
  },
  computed: {
    color() {
      return STATUS_MAP[this.status].color;
    },
    name() {
      return STATUS_MAP[this.status].name;
    }
  }
};
</script>

<style lang="sass" scoped>
.status
  display: flex
  align-items: center
  text-transform: capitalize

  .circle
    width: 20px
    height: 20px
    border-radius: 100%
    margin-right: 5px
</style>
