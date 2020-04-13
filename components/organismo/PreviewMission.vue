<template>
  <n-link :to="`/mission/${mission.id}`">
    <div class="card">
      <scenario :url="mission.thumb_url" />
      <status :status="mission.status" />
      <v-progress
        :status="mission.status"
        :progress="mission.enrollment || null"
      />
      <date :due-date="mission.due_date" />
    </div>
  </n-link>
</template>

<script>
import Scenario from "../atomo/Scenario.vue";
import Status from "../atomo/Status.vue";
import Date from "../atomo/Date.vue";
import vProgress from "../atomo/Progress.vue";

export default {
  props: {
    mission: {
      type: Object,
    },
  },
  components: {
    Scenario,
    Status,
    Date,
    vProgress,
  },
};
</script>

<style scoped>
.card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px 20px 0;
  border-radius: 8px;
  margin-top: 40px;
  color: #ffff;
}
@media (min-width: 768px) {
  .card {
    margin-top: 60px;
    width: 340px;
    padding: 20px 30px 0;
    border-radius: 0px;
  }
}

.card h3 {
  margin: 10px 0;
  font-weight: 700;
  font-size: 20px;
}
@media (min-width: 768px) {
  .card h3 {
    font-size: 24px;
  }
}
a {
  text-decoration: none;
  background-color: #f4ad22;
  margin: 10px;
  border-radius: 8%;
}
</style>
