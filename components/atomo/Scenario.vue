<template>
  <div class="image">
    <img v-if="url === null" src="../../static/svg/cenario.svg" alt="cenario" />
    <img v-else :src="url" alt="cenario" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
.image {
  margin-top: -60px;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 8%;
}
.image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  border-radius: 8%;
}

@media screen and (min-width: 0px) and (max-width: 768px) {
  .image {
    margin-top: -24px;
  }
}

@media (min-width: 768px) {
  .image {
    width: 80px;
    height: 80px;
  }
}
</style>
