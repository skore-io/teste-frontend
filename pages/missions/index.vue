<template>
  <main class="Missions">
    <MainHeader />
    <BackgroundGraphic />

    <section class="intro container">
      <div class="summary">
        <ul>
          <li>
            <NLink to="/">skore</NLink>
          </li>
          <span>/</span>
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
        :filters="filterItems"
      />
      <transition-group tag="ul" class="list" name="cardAnimation" v-if="missionsComp.length > 0">
        <Card
          v-for="(mission, indx) in missionsComp"
          :key="`${indx}_${mission.id}`"
          :style="`order: ${indx}`"
          :name="mission.name"
          :id="mission.id"
          :company="mission.company_id"
          :favorite="mission.priority"
          :status="mission.status"
          :thumb="mission.thumb_url"
          :progress="mission.enrollment ? mission.enrollment.percentage : 0"
        />
      </transition-group>
      <ul v-else-if="missionsComp.length == 0" class="list">
        <p class="not-found">Carregando missões...</p>
      </ul>
      <ul v-else class="list">
        <p class="not-found">Nenhuma missão registrada...</p>
      </ul>
    </section>
  </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BackgroundGraphic from "~/components/UI/BackgroundGraphic";
import Card from "~/components/UI/Card";
import MainHeader from "~/components/MainHeader/MainHeader";
import SectionListFilter from "~/components/SectionListFilter/SectionListFilter";

export default {
  components: {
    BackgroundGraphic,
    Card,
    MainHeader,
    SectionListFilter
  },

  head() {
    return {
      title: "Missões",
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
      activeFilter: "todas",
      filterItems: [
        {
          label: "em progresso",
          value: "IN_PROGRESS"
        },
        {
          label: "completadas",
          value: "COMPLETED"
        },
        {
          label: "não iniciadas",
          value: "NOT_STARTED"
        },
        {
          label: "bloqueadas",
          value: "BLOCKED"
        }
      ]
    };
  },

  computed: {
    ...mapState({ missions: "missions" }),
    ...mapGetters({ missionsComp: "filteredMissions" }),
    activeFilterComp() {
      return this.activeFilter;
    }
  },

  methods: {
    selectFilter({ label, value }) {
      this.activeFilter = label;
      this.$store.commit("applyFilter", value);
    },

    getMissions() {
      this.$axios
        .$get(
          "https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions"
        )
        .then(res =>
          this.$store.dispatch("loadMissions", {
            data: res,
            context: this
          })
        );
    }
  },

  async created() {
    await this.getMissions();
  }
};
</script>

<style lang="scss">
@import "@/assets/style/_colors.scss";
@import "@/assets/style/_variables.scss";
.Missions {
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
        animation: 0.8s appear ease-out;
        animation-iteration-count: 1;

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
        animation: 0.8s appear ease-out;
        animation-iteration-count: 1;
      }
      & p {
        margin-top: 1.8vh;
        font-size: calc(#{$p} * 1.8);
        font-weight: 200;
        letter-spacing: -0.05em;
        animation: 0.8s appear ease-out;
        animation-iteration-count: 1;
      }
    }
    & img {
      flex: 55;
      min-width: 200px;
      animation: 0.8s down-top ease-out;
      animation-iteration-count: 1;
    }
  }
  & .mission-list {
    margin-top: 11vh;
    animation: 0.8s appear ease-out;
    animation-iteration-count: 1;
    min-height: 80vh;

    & .list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 8vh;

      & .Card {
        width: 30%;
        margin-right: 5%;
        margin-bottom: 5%;
      }

      & .Card:nth-child(3n + 3) {
        margin-right: 0;
      }

      & .not-found {
        margin: 0 auto;
        text-align: center;
        color: $color_dark;
        padding: 3vh 0;
      }
    }
  }
}

.cardAnimation-enter-active {
  transition: all 0.3s ease;
}
.cardAnimation-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.cardAnimation-enter,
.cardAnimation-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

@keyframes down-top {
  0% {
    margin-top: 15vh;
    opacity: 0;
  }
  100% {
    margin-top: 0;
    opacity: 1;
  }
}

@media all and (min-width: 280px) and (max-width: 960px) and (orientation: portrait) {
  .Missions {
    & .intro {
      flex-direction: column;

      & .summary {
        flex: unset;
        margin-top: 0;

        & * {
          text-align: center;
        }

        & ul {
          justify-content: center;
          padding: 0 0 1.5vh;

          & li {
            padding: 0 2vw;
          }
        }
        & p {
          margin-top: 1.5vh;
          font-size: calc(#{$p} * 1.6);
        }
      }
      & img {
        order: -1;
        flex: unset;
        min-width: unset;
        width: 70%;
        margin-bottom: 5vh;
      }
    }
    & .mission-list {
      margin-top: 10vh;
      min-height: unset;
      margin-bottom: 10vh;

      & .list {
        margin-top: 5vh;

        & .Card {
          width: 100%;
          margin-right: 0;
          margin-bottom: 2vh;
        }
      }
    }
  }
}
@media all and (min-height: 280px) and (max-height: 640px) and (orientation: landscape) {
  .Missions {
    & .intro {
      & .summary {
        margin-top: 0;
      }
      & img {
        max-height: 70vh;
        margin-bottom: 5vh;
      }
    }
    & .mission-list {
      margin-top: 20vh;
      min-height: unset;
      margin-bottom: 20vh;

      & .list {
        margin-top: 10vh;

        & .Card {
          width: 48%;
          margin-right: 4%;
          margin-bottom: 4vh;
        }
        & .Card:nth-child(3n + 3) {
          margin-right: 4%;
        }
        & .Card:nth-child(even) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
