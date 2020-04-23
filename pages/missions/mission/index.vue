<template>
  <div>
    <h1>Mission</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Your missions",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Your missions"
        }
      ]
    };
  },
  computed: {
    metaTitleComp() {
      return this.$metaInfo.meta.title;
    }
  }
};
</script>

<style>
</style>
