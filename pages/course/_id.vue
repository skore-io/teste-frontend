<template>
  <div class="main">
    <div class="card">
      <div class="card_left">
        <img :src="course.thumb_url" />
      </div>
      <div class="card_right">
        <h1>{{ course.name }}</h1>
        <div class="card_right__details">
          <p v-if="course.due_date">
            Disponível até: {{ course.due_date.available_at_formated }}
          </p>

          <div class="card_right__steps" v-if="course.mappedSteps">
            <p>Etapas:</p>
            <p class="step" v-for="step in course.mappedSteps" :key="step.id">
              {{ step.name }} <span v-if="step.complete"> - Completa</span>
            </p>
          </div>

          <p>Status: {{ course.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCourse from "@/components/CardCourse";
import * as moment from "moment";

export default {
  components: {
    CardCourse,
  },

  data() {
    return {
      course: {},
    };
  },

  mounted() {
    this.$axios.get(`/missions/${this.$route.params.id}`).then((res) => {
      if (res.data.enrollment) {
        const mappedSteps = [];
        res.data.steps.forEach((step) => {
          let isCompletedStep = false;
          res.data.enrollment.completed_steps.forEach((completedSteps) => {
            if (step.id === completedSteps.step_id) {
              isCompletedStep = true;
            }
          });
          mappedSteps.push({
            id: step.id,
            name: step.name,
            complete: isCompletedStep,
          });
        });
        res.data.mappedSteps = mappedSteps;
      }

      if (res.data.due_date) {
        res.data.due_date.available_at_formated = moment(
          res.data.due_date.available_at_formated
        ).format("DD/MM/Y");
      }

      switch (res.data.status) {
        case "IN_PROGRESS":
          res.data.status = "Em progresso, continue assim!";
          break;
        case "NOT_STARTED":
          res.data.status = "Vamos começar esse curso fantástico vamos?";
          break;
        case "COMPLETED":
          res.data.status = "Isso ai, você já completou esse curso :D";
          break;
        case "BLOCKED":
          res.data.status = "Ess curso está bloqueado :(";
          break;
        default:
          break;
      }

      this.course = res.data;
    });
  },
};
</script>

<style>
.main {
}
.card {
  max-width: 800px;
  width: 100%;
  min-width: 300px;
  height: 400px;
  background: transparent;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  border-top-left-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
  border-bottom-right-radius: 10px;
}
.card_left {
  width: 40%;
  height: 400px;
  float: left;
  overflow: hidden;
  background: transparent;
}
.card_left img {
  width: 100%;
  height: auto;
  border-radius: 10px 0 0 10px;
  -webkit-border-radius: 10px 0 0 10px;
  -moz-border-radius: 10px 0 0 10px;
  position: relative;
}
.card_right {
  width: 60%;
  float: left;
  background: #2f4858;
  height: 400px;
  border-radius: 0 0px 10px 0;
}
.card_right h1 {
  color: white;
  font-weight: 300;
  text-align: left;
  font-size: 45px;
  letter-spacing: 1px;
  margin-left: 50px;
  margin-top: 50px;
}

.card_right__details {
  margin-left: 50px;
  color: #fff;
}
.card_right__steps {
  margin: 20px 0px;
}
.card_right__steps .step {
  color: white;
  font-size: 16px;
}

@media screen and (max-width: 770px) {
  .card_right {
    width: 100%;
  }

  .card_left {
    width: 100%;
  }
}
</style>
