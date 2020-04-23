<template>
  <main class="Missions">
    <div class="background_graphic">
      <img src="~/assets/images/background_graphic.svg" />
    </div>

    <section class="intro container">
      <div class="summary">
        <ul>
          <li>
            <NLink to="/missions">skore</NLink>
          </li>
          <span> / </span>
          <li>
            <NLink to="/missions">missões</NLink>
          </li>
        </ul>
        <h1>Olá Ricardo.</h1>
        <p>Você já alcançou 33% dos seus objetivos. Continue assim!</p>
      </div>
      <img src="~/assets/images/illustration_missions.svg" />
    </section>

    <section class="mission-list container">
      <SectionListFilter
        title="Suas missões"
        :active="activeFilterComp"
        @select="selectFilter"
        :filters="[
          'todas',
          'em progresso',
          'completas',
          'não cadastradas',
          'bloqueadas',
          'vencidas'
        ]"
      />
    </section>
  </main>
</template>

<script>
import SectionListFilter from "~/components/SectionListFilter/SectionListFilter";
export default {
  components: {
    SectionListFilter
  },

  head() {
    return {
      title: "Your missions",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Your missions"
        }
      ]
    };
  },

  data() {
    return {
      activeFilter: "todas"
    };
  },

  computed: {
    activeFilterComp() {
      return this.activeFilter;
    }
  },

  methods: {
    selectFilter(filter) {
      this.activeFilter = filter;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/style/_colors.scss";
@import "@/assets/style/_variables.scss";
.Missions {
  & .background_graphic {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    min-height: 550px;
    user-select: none;

    & img {
      object-fit: cover;
      min-height: 550px;
      width: 100%;
      height: 100%;
    }
  }
  & .intro {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .summary {
      flex: 45;
      margin-top: -11vh;

      & ul {
        display: flex;
        align-items: center;
        padding: 0 0 2.5vh;

        & * {
          color: $color_primary;
          font-weight: bold;
          letter-spacing: 0.1em;
        }

        & li {
          padding: 0 0.6vw;

          & a {
            text-transform: uppercase;
            font-size: $p;

            &:hover {
              color: $color_light;
              background-color: $color_primary;
            }
          }
        }

        & li:nth-child(1) {
          padding-left: 0;
        }
      }
      & h1 {
        font-size: calc(#{$p} * 3);
        letter-spacing: -0.05em;
      }
      & p {
        margin-top: 1.8vh;
        font-size: calc(#{$p} * 1.8);
        font-weight: 200;
        letter-spacing: -0.05em;
      }
    }
    & img {
      flex: 55;
      min-width: 200px;
    }
  }
  & .mission-list {
    margin-top: 10vh;
  }
}
</style>
