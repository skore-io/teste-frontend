<template>
  <div class="error">
    <h1>404</h1>
    <NLink to="/missions">Voltar para missões</NLink>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & h1 {
    font-size: 20vw;
  }

  & a {
    font-size: 3vw;
    text-align: center;
    margin: 0 auto;
    display: block;
    margin-top: 5vh;
    text-decoration: underline;
  }
}
</style>
