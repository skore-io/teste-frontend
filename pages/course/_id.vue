<template>
  <div class="details-page">
    <div class="image-area">
      <img :src="course.thumb_url" />
    </div>
    <div class="details">
      <h1>{{ course.name }}</h1>
      <p v-if="course.due_date">
        Disponível até: {{ course.due_date.available_at_formated }}
      </p>

      <div v-if="course.mappedSteps" class="card_right__steps">
        <p>Etapas:</p>
        <p v-for="step in course.mappedSteps" :key="step.id" class="step">
          {{ step.name }} <span v-if="step.complete"> - Completa</span>
        </p>
      </div>

      <p>Status: {{ course.status }}</p>

      <div class="similar-courses">
        <card-course
          v-for="similarCourse in similarCourses"
          :key="similarCourse.id"
          :course="similarCourse"
          :show-image="false"
          :margin-course="'0px 10px 0px 0px'"
        />
      </div>
    </div>
  </div>
</template>

<script type="application/javascript">
import * as moment from 'moment';
import CardCourse from '../../components/CardCourse';

export default {
  components: {
    CardCourse,
  },
  data() {
    return {
      course: {},
      similarCourses: [],
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
        ).format('DD/MM/Y');
      }

      switch (res.data.status) {
        case 'IN_PROGRESS':
          res.data.status = 'Em progresso, continue assim!';
          break;
        case 'NOT_STARTED':
          res.data.status = 'Vamos começar esse curso fantástico vamos?';
          break;
        case 'COMPLETED':
          res.data.status = 'Isso ai, você já completou esse curso :D';
          break;
        case 'BLOCKED':
          res.data.status = 'Esse curso está bloqueado :(';
          break;
        default:
          break;
      }

      this.course = res.data;
    });

    this.$axios.get(`/missions`).then((res) => {
      this.similarCourses = res.data
        .sort(() => Math.random() - Math.random())
        .slice(0, 3);
    });
  },
};
</script>

<style lang="css" scoped>
.details-page {
  width: 100%;
  margin: 30px auto;
  color: #000;
  border: 1px solid #ccc;
  padding: 30px;
  float: left;
}

.details-page .image-area {
  display: block;
  margin-right: 30px;
  float: left;
}

.similar-courses {
  width: 100%;
  margin-top: 20px;
}
</style>
