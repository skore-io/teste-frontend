<template>
  <card-detail :mission="mission" />
</template>

<script>
import CardDetail from "~/components/missions/Detail";

export default {
  components: {
    CardDetail
  },
  data() {
    return {
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
    }
  },
  mounted() {
    this.getMission();
  }
};
</script>

<style>
</style>
