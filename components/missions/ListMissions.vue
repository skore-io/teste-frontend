<template>
  <div id="app">
    <FilterMissions />
    <ul class="card-list">
      <li v-for="mission in missions" :key="mission.id" class="card-item">
        <nuxt-link :to="{ name: 'missions-id', params: { id: mission.id }}">
          <img :src="mission.thumb_url" class="thumb" />
          <div class="card-content">
            <div v-if="mission.status == 'BLOCKED'" class="status -blocked"></div>
            <div v-if="mission.status == 'COMPLETED'" class="status -completed"></div>
            <h2 class="title">{{mission.name}}</h2>
            <div v-if="mission.status == 'NOT_STARTED'" class="btn-default">Iniciar</div>
            <div v-else-if="mission.status == 'IN_PROGRESS'" class="btn-default">Continuar</div>
            <div class="progress-bar" v-if="mission.enrollment">
              <i>{{mission.enrollment.percentage}}% concluído</i>
              <div class="progress" :style="'width:'+mission.enrollment.percentage+'%'">
                <i>{{mission.enrollment.percentage}}% concluído</i>
              </div>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import FilterMissions from "./FilterMissions";

export default {
  components: {
    FilterMissions
  },

  data() {
    return {
      missions: []
    };
  },
  mounted() {
    axios
      .get(
        "https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions"
      )
      .then(response => {
        this.missions = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss">
.card-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px auto 60px auto;
  > .card-item {
    position: relative;
    border-radius: 7px;
    overflow: hidden;
    background: #ffffff;
    width: 400px;
    margin: 2% 1%;
    transition: all 0.2s;
    &:hover {
      transition: all 0.2s;
      box-shadow: -5px 5px 0px rgba(255, 255, 255, 0.3);
      transform: scale(1.02);
      .btn-default {
        transition: border 0.3s;
        border: 1px solid #19211a;
      }
    }
    > a {
      display: flex;
    }
  }
  .thumb {
    display: block;
    background: #dddddd;
    transition: all 0.5s;
    width: 150px;
    height: 240px;
  }
}
.card-content {
  background: #fff;
  top: 0;
  padding: 15px;
  width: calc(100% - 150px);
  position: relative;
  > .title {
    color: #272727;
    font-size: 26px;
    font-weight: 600;
    height: 100px;
  }
  > .status {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 auto 20px;
    &.-completed {
      background: #14c114 url("~@/assets/icon-check.svg") center no-repeat;
    }
    &.-blocked {
      background: #8a8a8a url("~@/assets/icon-lock.svg") center no-repeat;
    }
  }
  > .btn-default {
    float: right;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
</style>