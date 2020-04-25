<template>
  <div class="background_graphic">
    <img src="~/assets/images/background_graphic.svg" />
  </div>
</template>

<script>
export default {
  name: "BackgroundGraphic"
};
</script>

<style scoped lang="scss">
@import "@/assets/style/_colors.scss";
@import "@/assets/style/_variables.scss";

.background_graphic {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  min-height: 550px;
  user-select: none;
  animation: 0.8s falldown ease-out;
  animation-iteration-count: 1;

  & img {
    object-fit: cover;
    min-height: 550px;
    width: 100%;
    height: 100%;
  }
}

@keyframes falldown {
  0% {
    margin-top: -100%;
    opacity: 0;
  }
  100% {
    margin-top: 0;
    opacity: 1;
  }
}

@media all and (min-width: 280px) and (max-width: 960px) and (orientation: portrait) {
  .background_graphic {
    min-height: 65vh;

    & img {
      min-height: 65vh;
    }
  }
}
@media all and (min-height: 280px) and (max-height: 640px) and (orientation: landscape) {
  .background_graphic {
    min-height: 110vh;
    max-height: 110vh;

    & img {
      min-height: 110vh;
      max-height: 110vh;
    }
  }
}
</style>
