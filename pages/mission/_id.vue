<template>
  <div class="detail">
    <error v-if="error" />
    <detail v-else />
  </div>
</template>

<script>
import Error from "../../components/atomo/Error.vue";
import Detail from "../../components/organismo/DetailMission.vue";

import { mapActions, mapMutations, mapState } from "vuex";

export default {
  components: {
    Error,
    Detail
  },
  computed: {
    ...mapState(["error"])
  },
  methods: {
    ...mapActions(["getMission"]),
    ...mapMutations(["setMission"])
  },
  mounted() {
    this.getMission(this.$route.params.id);
  },
  destroyed() {
    this.setMission(null);
  }
};
</script>

<style scoped>
.detail {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
