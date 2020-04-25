<template>
  <li :class="status === 'BLOCKED' ? 'Card blocked' : 'Card'">
    <NLink :to="`/missions/${this.id}`">
      <div class="thumb">
        <img class="lens" src="~/assets/images/thumb_lens.png" />
        <img v-if="thumb" :src="thumb" :alt="name" />
        <img v-else src="~/assets/images/thumb_mission.jpg" :alt="name" />
      </div>
      <div class="info">
        <div class="names">
          <h2>{{name}}</h2>
          <small>Company Name</small>
        </div>
        <img
          v-if="status === 'BLOCKED'"
          :class="favorite == 1 ? 'fav favorite' : 'fav'"
          src="~/assets/icons/blocked.svg"
        />
        <img
          v-else
          :class="favorite == 1 ? 'fav favorite' : 'fav'"
          src="~/assets/icons/rating_star.svg"
        />
        <div class="box">
          <div class="progress">
            <span
              :style="`width: ${progressComp}%; transition: all ${Math.random() * (1 - 0.4) + 0.4}s ease-in-out`"
            ></span>
          </div>
          <p>{{progress}}%</p>
        </div>
      </div>
    </NLink>
  </li>
</template>

<script>
export default {
  name: "Card",

  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    favorite: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    thumb: {
      type: String
    },
    // availableAt: {
    //   type: Date,
    //   default: null
    // },
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

.Card {
  height: 144px;

  & a {
    cursor: pointer;
    position: relative;
    display: flex;
    height: 100%;
    background: $color_light;
    border-radius: 6px;
    box-shadow: 0 1vh 3vh rgba(black, 0.07);
    transition: all 0.15s ease-in-out;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 1vh 3vh rgba(black, 0.14);
    }

    & .thumb {
      position: relative;
      height: 100%;
      flex: 30;
      border-radius: 6px 0 0 6px;

      & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 6px 0 0 6px;
      }

      & .lens {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    & .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 70;
      padding: 1vw;

      & .names {
        & h2 {
          font-size: calc(#{$p} * 1.3);
          letter-spacing: -0.05em;
          line-height: 1.1em;
          padding-right: 10%;
        }
        & small {
          margin-top: 0.5vh;
          color: $color_dark;
        }
      }
      & .fav {
        position: absolute;
        top: 1.6vh;
        right: 1.6vh;
      }
      & .favorite {
        filter: brightness(0.75) hue-rotate(90deg) sepia(100%) saturate(1000%);
      }
      & .box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 0.4vh;

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

        & p {
          flex: 25;
          line-height: 1em;
          text-align: right;
          color: $color_primary;
        }
      }
    }
  }
}

.blocked {
  & a {
    cursor: default;
    pointer-events: none;
    filter: grayscale(1);
    user-select: none;
    background: #fafafa;
    opacity: 0.5;
    box-shadow: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
}

@media all and (min-width: 280px) and (max-width: 960px) and (orientation: portrait) {
  .Card {
    height: calc(#{$p} * 9);

    & a {
      & .info {
        padding: 2.5vw;
      }
    }
  }
}
@media all and (min-height: 280px) and (max-height: 640px) and (orientation: landscape) {
  .Card {
    height: calc(#{$p} * 9);

    & a {
      & .info {
        padding: 2vw;
      }
    }
  }
}
</style>
