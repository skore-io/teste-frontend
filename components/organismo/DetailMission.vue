<template>
  <div v-if="mission" class="detail">
    <div class="heard-detail">
      <div class="logo-detail">
        <img
          class="logo-details"
          src="../../static/png/skore-green.png"
          alt="logo"
        />
      </div>
      <div class="link-home">
        <n-link to="/">
          <div class="home">Home</div>
        </n-link>
      </div>
    </div>
    <div class="card-detail">
      <h1>{{ mission.name }}</h1>

      <date :due-date="mission.due_date" />

      <div class="card-img">
        <img class="img-detail" :src="mission.thumb_url" alt />
      </div>

      <div class="steps">
        {{ this.mission.step }}
        <step v-for="step in mission.steps" :key="step.id" :step="step" />
      </div>
    </div>
  </div>
</template>

<script>
import Step from "../molecula/Step.vue";
import Date from "../atomo/Date.vue";

import { mapState } from "vuex";

export default {
  name: "DetailMission",
  components: {
    Step,
    Date,
  },
  computed: {
    ...mapState(["mission"]),
  },
};
</script>

<style scoped>
.detail {
  background-color: #c5bdbd5c;
  color: #767575;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 100vh;
}
.detail .back {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 0 0 0 100%;
}

.img-detail {
  width: 180px;
  height: 180px;
  border-radius: 8%;
  margin-top: 20px;
}

@media (min-width: 768px) {
  .detail .back {
    width: 80px;
    height: 80px;
  }
}
.detail .back img {
  margin-left: 10px;
  margin-bottom: 10px;
  height: 20px;
}
@media (min-width: 768px) {
  .detail .back {
    height: 30px;
  }
}
.detail h1 {
  padding: 0 30px;
  text-align: center;
}
.detail .steps {
  margin: 10px 0;
  padding: 55px 10px;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
@media screen and (min-width: 0px) and (max-width: 1070px) {
  .detail .steps {
    display: block;
  }
}

@media (min-width: 768px) {
  .detail {
    padding: 0 30px;
  }
}
.detail h2 {
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 0;
}
.detail .status {
  margin-top: 30px;
}

.card-img {
  width: 180px;
  height: 180px;
  margin: 0 auto;
}

.card-detail {
  background: #ffff;
  border-radius: 8%;
  height: 700px;
  padding: 40px;
}

@media screen and (min-width: 0px) and (max-width: 1070px) {
  .card-detail {
    height: 100%;
  }
}

img.logo-details {
  width: 150px;
}

.logo-detail {
  display: inline-block;
  width: auto;
}

.link-home {
  display: inline-block;
  font-size: 2em;
  margin-left: 25px;
}

.heard-detail {
  margin: 20px;
  width: 100%;
  height: 50px;
  position: relative;
  bottom: 76px;
}

@media screen and (min-width: 0px) and (max-width: 1068px) {
  .heard-detail {
    bottom: 0px;
    margin-left: 37px;
  }
}
@media screen and (min-width: 1069px) and (max-width: 1090px) {
  .heard-detail {
    bottom: 76px;
  }
}

.home {
  color: #f4ad22;
}
a.nuxt-link-active {
  text-decoration: none;
}
</style>
