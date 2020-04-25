<template>
  <div class="app">
    <nuxt />
  </div>
</template>

<script>
import axios from "~/plugins/axios";

export default {
  async mounted() {
    const vm = this.$store;
    try {
      const res = await axios.get("/");
      // console.log(res);
      vm.dispatch("loadMissions", {
        data: res.data,
        context: this
      });
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/style/_defaults.scss";

.container {
  max-width: $area;
  margin: 0 auto;
}

@media all and (min-width: 280px) and (max-width: 960px) and (orientation: portrait) {
  .container {
    min-width: 100%;
    max-width: unset;
    padding: 0 10vw;
  }
}
@media all and (min-height: 280px) and (max-height: 640px) and (orientation: landscape) {
  .container {
    min-width: 100%;
    max-width: unset;
    padding: 0 5vw;
  }
}
@media all and (min-width: 961px) and (max-width: 1200px) and (orientation: portrait) {
  .container {
    padding: 0 5vw;
  }
}
</style>
