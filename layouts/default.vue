<template>
  <div class="app">
    <MainHeader />
    <nuxt />
  </div>
</template>

<script>
import MainHeader from "~/components/MainHeader/MainHeader";
export default {
  components: {
    MainHeader
  }
};
</script>

<style lang="scss">
@import "@/assets/style/_defaults.scss";

.container {
  max-width: $area;
  margin: 0 auto;
}
</style>
