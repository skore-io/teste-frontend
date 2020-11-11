<template>
  <div class="main-page">
    <header-component />
    <div class="main-page">
      <div class="container">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script type="application/javascript">
import HeaderComponent from '../components/Header';

export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="css">
html {
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background: #e7ebed;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.main-page {
  background: #e7ebed;
  color: #ecf0f1;
  font-family: 'Roboto';
  width: 100%;
  float: left;
  display: block;
}

.container {
  margin: 10px 0px 0px 0px;
  width: 100%;
  max-width: 900px;
  min-width: 300px;
  margin: 0 auto;
}
</style>
