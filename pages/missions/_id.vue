<template>
  <transition>
    <article class="mission-main">
      <nuxt-link class="btn-default" to="/">< Lista de missões</nuxt-link>
      <div class="mission-detail">
        <img :src="mission.thumb_url" class="thumb" />
        <div class="wrap-content">
          <h2 class="name">{{mission.name}}</h2>
          <div class="progress-bar" v-if="mission.enrollment">
            <i>{{mission.enrollment.percentage}}% concluído</i>
            <div class="progress" :style="'width:'+mission.enrollment.percentage+'%'">
              <i>{{mission.enrollment.percentage}}% concluído</i>
            </div>
          </div>
          <p class="info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            fugit ut dicta enim excepturi beatae, ullam quis libero fugiat quidem, totam tenetur
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
    var article = document.querySelector(".mission-detail");
    article.classList.add("hide");
    axios
      .get(
        "https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions/" +
          this.$route.params.id
      )
      .then(response => {
        article.classList.remove("hide");
        this.mission = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>
<style lang="scss">
.mission-main {
  max-width: 60%;
  margin: 30px auto;
}
.wrap-content {
  padding: 25px;
  > .name {
    font-size: 33px;
    padding-bottom: 20px;
  }
}
.mission-detail {
  background: #fff;
  border-radius: 7px;
  overflow: hidden;
  margin: 30px 0;
  display: flex;
  transition: opacity .4s;
  &.hide {
    opacity: 0;
  }
  > .thumb {
    margin-right: 15px;
  }
  .progress-bar {
    margin: 15px 0;
    i {
      width: 610px;
    }
  }
  &.show {
    opacity: 1;
    transition: opacity 0.3s;
  }
}
</style>