<template>
  <div class="main-page">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style>
html {
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.main_page {
  padding: 0 10px;
  margin: 0;
  background: #e7ebed;
  color: #ecf0f1;
  font-family: "Roboto";
  min-height: 100vh;
  width: 100%;
}
</style>
