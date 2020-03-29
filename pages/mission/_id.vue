<template>
  <div class="detail">
    <img v-if="loading" src="/svg/loader.svg" height="50px" alt="carregando..." />
    <card-detail v-else :mission="mission" />
  </div>
</template>

<script>
import CardDetail from "~/components/missions/Detail";

export default {
  components: {
    CardDetail
  },
  data() {
    return {
      loading: false,
      mission: null
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
        else if (res.status === 404) throw "Missão inexistente!";
        else throw "Ocorreu um erro inesperado!";
      } catch (e) {
        console.log(e);
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
