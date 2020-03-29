<template>
  <div class="detail">
    <img v-if="loading" src="/svg/loader.svg" height="50px" alt="carregando..." />
    <error v-else-if="error" :message="error" />
    <card-detail v-else :mission="mission" />
  </div>
</template>

<script>
import Error from "~/components/Error";
import CardDetail from "~/components/missions/Detail";

export default {
  components: {
    Error,
    CardDetail
  },
  data() {
    return {
      loading: false,
      mission: null,
      error: ""
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    async getMission() {
      this.loading = true;

      try {
        let res = await fetch(
          `https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions/${this.id}`
        );
        if (res.status === 200) this.mission = await res.json();
        else if (res.status === 404)
          throw "Ah não! Você não pode acessar essa missão ou ela não existe ;(";
        else throw "Ocorreu um erro inesperado, tente novamente mais tarde!";
      } catch (e) {
        this.error = e;
      }

      this.loading = false;
    }
  },
  mounted() {
    this.getMission();
  }
};
</script>

<style lang="sass" scoped>
.detail
  display: flex
  justify-content: center
  align-items: center
</style>
