<template>
  <div class="image">
    <img v-if="url" :src="url" alt />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: ""
    },

    alt: {
      type: String,
      default: "picture"
    }
  }
};
</script>

<style lang="sass" scoped>
.image
  margin-top: -60px
  background-color: #2F2F33
  width: 100px
  height: 100px
  border-radius: 100%
  animation: fade .5s

  @media (min-width: 768px)
    width: 200px
    height: 200px

  img
    width: 100%
    height: 100%
    object-fit: cover
    object-position: center
    border-radius: 100%
</style>
