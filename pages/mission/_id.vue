<template>
  <div class="detail">
    <error v-if="error" />
    <detail v-else />
  </div>
</template>

<script>
import Error from "~/components/Error";
import Detail from "~/components/missions/Detail";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    Error,
    Detail
  },
  computed: {
    ...mapState(["error"])
  },
  methods: {
    ...mapActions(["getMission"])
  },
  mounted() {
    this.getMission(this.$route.params.id);
  }
};
</script>

<style lang="sass" scoped>
.detail
  display: flex
  justify-content: center
  align-items: center
</style>
