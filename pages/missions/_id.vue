<template>
  <transition>
    <article class="mission-main">
      <nuxt-link class="btn-default" to="/">< Lista de missões</nuxt-link>
      <div class="mission-detail">
        <img :src="mission.thumb_url" class="thumb" />
        <div class="wrap-content">
          <h2 class="name">{{mission.name}}</h2>
          <div class="progress-bar" v-if="mission.enrollment">
            <i class="value">{{mission.enrollment.percentage}}% concluído</i>
            <div class="progress" :style="'width:'+mission.enrollment.percentage+'%'">
              <i class="value">{{mission.enrollment.percentage}}% concluído</i>
            </div>
          </div>
          <p class="info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            vitae laborum dolores similique nostrum repellendus voluptatum corporis!
          </p>
        </div>
      </div>
    </article>
  </transition>
</template>

<script>
import axios from "axios";

export default {
  head: {
    title: "Skore - Missão"
  },
  data() {
    return {
      mission: []
    };
  },
  mounted() {
    axios
      .get(
        "https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions/" +
          this.$route.params.id
      )
      .then(response => {
        this.mission = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>
<style lang="scss">
@import "~/assets/scss/_variables.scss";

.mission-main {
  max-width: 960px;
  margin: 30px auto;
  padding: 0 20px;
}
.wrap-content {
  padding: 25px;
  > .name {
    font-size: 33px;
    padding-bottom: 20px;
  }
  > .info {
    font-size: 14px;
  }
  @media (max-width: $tablet) {
    padding: 13px;
    > .name {
      font-size: 22px;
    }
  }
  @media (max-width: $mobile) {
    padding: 7px;
    > .name {
      font-size: 18px;
    }
    > .info {
      font-size: 12px;
    }
  }
}
.mission-detail {
  background: #fff;
  border-radius: 7px;
  overflow: hidden;
  margin: 30px 0;
  display: flex;
  transition: opacity 0.4s;
  > .thumb {
    margin-right: 15px;
  }
  .progress-bar {
    margin: 15px 0;
    .value {
      width: 705px;
    }
  }
  @media (max-width: $tablet) {
    width: 400px;
    margin: 30px auto;
    .progress-bar {
      margin-bottom: 0;
      .value {
        width: 150px;
      }
    }
  }
  @media (max-width: $mobile) {
    width: 300px;
    > .thumb {
      margin-right: 0;
    }
    .progress-bar {
      .value {
        width: 105px;
      }
    }
  }
}
</style>