<template>
  <div id="app">
    <NavBar />
    <nuxt />
  </div>
</template>

<script>
import Vue from "Vue";
import NavBar from "~/components/UI/NavBar";

export default {
  el: "#app",
  components: {
    NavBar
  }
};
</script>

<style>
@import "~/assets/scss/_global.scss";

</style>
