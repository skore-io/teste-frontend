<template>
  <header class="MainHeader container">
    <NLink to="/">
      <Logo />
    </NLink>
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
  animation: 1s appear ease-out;
  animation-iteration-count: 1;

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

@media all and (min-width: 280px) and (max-width: 960px) and (orientation: portrait) {
  .MainHeader {
    padding: 3vh 10vw 5vh;

    & .Logo {
      max-width: calc(#{$p} * 8);
    }
  }
}
@media all and (min-height: 280px) and (max-height: 640px) and (orientation: landscape) {
  .MainHeader {
    padding: 5vh 5vw 5vh;

    & .Logo {
      max-width: calc(#{$p} * 5);
    }
  }
}
@media all and (min-width: 961px) and (max-width: 1200px) and (orientation: portrait) {
  .MainHeader {
    padding: 5vh 5vw 5vh;

    & .Logo {
      width: calc(#{$p} * 12);
    }
  }
}
</style>
