<template>
  <div class="error">
    <img src="../../static/svg/blocked.svg" alt="erro" />
    <p>Missão bloqueada!</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      seconds: 3,
      interval: null,
    };
  },
  computed: {
    ...mapState(["error"]),
  },
  methods: {
    ...mapMutations(["setError"]),
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
    },
  },
};
</script>

<style scoped>
.error {
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  padding: 0 45px;
}
.error img {
  height: 100px;
}
.error p {
  font-size: 25px;
  margin-top: 15px;
  color: #767575;
}
</style>
