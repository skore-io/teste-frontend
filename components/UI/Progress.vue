<template>
  <li class="Progress">
    <div class="line">
      <p>
        <strong>{{name}}</strong>
      </p>
      <p>{{Math.round(progress)}}%</p>
    </div>
    <div class="progress">
      <span
        :style="`width: ${progressComp}%; transition: all ${Math.random() * (1 - 0.4) + 0.4}s ease-in-out`"
      ></span>
    </div>
  </li>
</template>

<script>
export default {
  name: "Progress",

  props: {
    name: {
      type: String,
      required: true
    },
    progress: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      customProgress: 0
    };
  },

  computed: {
    progressComp() {
      return this.customProgress;
    }
  },

  methods: {
    setProgress() {
      setTimeout(() => {
        this.customProgress = this.progress;
      }, 500);
    }
  },

  mounted() {
    this.setProgress();
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/style/_colors.scss";
@import "@/assets/style/_variables.scss";

.Progress {
  & .line {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & p {
      line-height: 2em;
      text-align: right;
      color: $color_dark;
    }
  }
  & .progress {
    flex: 75;
    width: 100%;
    height: calc(#{$p} * 0.75);
    background: $color_light_hard;
    border-radius: 10px;

    & span {
      display: block;
      height: 100%;
      background: linear-gradient(
          90deg,
          rgba(yellow, 0.5) 0%,
          rgba(white, 0) 100%
        ),
        $color_primary;
      border-radius: 10px;
      transition: all 0.5s ease-in-out;
    }
  }
}
</style>
