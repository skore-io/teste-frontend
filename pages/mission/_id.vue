<template>
  <div class="detail">
    <error v-if="error" />
    <detail v-else />
  </div>
</template>

<script>
import Error from "~/components/Error";
import Detail from "~/components/missions/Detail";

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

<style lang="sass" scoped>
.detail
  display: flex
  justify-content: center
  align-items: center
</style>
