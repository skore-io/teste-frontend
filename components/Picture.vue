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
  box-shadow: 10px 10px 15px -8px rgba(0,0,0,0.46)
  border-radius: 100%
</style>
