<template>
  <img :src="url" alt />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },

    alt: {
      type: String,
      default: "picture"
    }
  }
};
</script>

<style lang="sass" scoped>
img
  width: 100px
  height: 100px
  border-radius: 100%
</style>
