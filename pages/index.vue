<template>
  <div class="home">
    <div>
      <logo />
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },

  head() {
    return {
      title: process.env.npm_package_description,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Your missions"
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({
        path: "/missions"
      });
    }, 3000);
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: -webkit-fill-available;

  & .Logo {
    width: 50vw;
    animation: 2.9s appear-in-out ease-in-out;
    animation-iteration-count: 1;
    opacity: 0;
  }
}
</style>
