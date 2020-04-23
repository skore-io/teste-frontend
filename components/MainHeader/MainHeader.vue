<template>
  <header class="MainHeader container">
    <Logo />
    <nav>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  name: "MainHeader",
  components: {
    Logo
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/style/_colors.scss";
@import "@/assets/style/_variables.scss";

.MainHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3vh 0;

  & nav {
    & ul {
      display: flex;
      align-items: center;
      & li {
        list-style: none;
        width: calc((#{$space} / 20) + 30px);
        height: 1vh;
        border-radius: 5vw;
        background: $color_dark;
        opacity: 0.5;
        margin-left: 3vw;

        & :nth-child(1) li {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
