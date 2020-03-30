<template>
  <div class="error">
    <img src="/svg/cross.svg" alt="erro" />
    <p>{{error}}</p>
    <span>Você será redirecionado em {{seconds}}s</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      seconds: 10,
      interval: null
    };
  },
  computed: {
    ...mapState(["error"])
  },
  methods: {
    ...mapMutations(["setError"])
  },
  mounted() {
    this.interval = setInterval(
      () => (this.seconds ? this.seconds-- : clearInterval(this.interval)),
      1000
    );
  },
  destroyed() {
    clearInterval(this.interval);
    this.setError(null);
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

  span
    opacity: .6
</style>
