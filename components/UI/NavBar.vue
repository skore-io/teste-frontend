<template>
  <header class="global-header">
    <Logo class="logo" />
  </header>
</template>

<script>
import Logo from './Logo'
export default {
  components: { Logo } 
}
</script>

<style lang="scss">
@import "~/assets/scss/_global.scss";

.global-header {
  background: rgba(255,255,255,0.3);
  background: linear-gradient(to right, #428a43, #253369);
  padding: 30px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  .logo {
    width: 70px;
    margin: 0 auto;
    display: block;
  }
}

</style>