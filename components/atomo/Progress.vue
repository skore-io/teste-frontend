<template>
  <div class="progress">
    <span>
      <p title="Porcentagem do progresso">{{ percentage || 0 }}%</p>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    progress: Object,
    status: String,
  },
  computed: {
    percentage() {
      return this.progress ? this.progress.percentage : 0;
    },
  },
};
</script>

<style scoped>
.progress {
  width: calc(100% + 39px);
  margin-top: 20px;
  text-align: center;
}

p {
  font-size: 40px;
}

@media (min-width: 768px) {
  .progress {
    width: calc(100% + 57px);
  }
}

@media screen and (min-width: 768px) and (max-width: 1366px) {
  p {
    font-size: 20px;
  }
}
</style>
