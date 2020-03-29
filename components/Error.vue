<template>
  <div class="error">
    <img src="/svg/cross.svg" alt="erro" />
    <p>{{message}}</p>
    <span>Você será redirecionado em {{seconds}}s</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seconds: 10
    };
  },
  props: {
    message: String
  },
  mounted() {
    setInterval(() => {
      if (this.seconds > 0) this.seconds--;
    }, 1000);
  },
  watch: {
    seconds() {
      if (!this.seconds) this.$router.push("/");
    }
  }
};
</script>

<style lang="sass" scoped>
.error
  width: 100%
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  text-align: center
  padding: 0 45px

  img
    height: 100px

  p
    font-size: 20px
</style>
