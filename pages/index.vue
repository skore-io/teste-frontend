<template>
  <div class="main_page">
    <div class="row">
      <div class="row__inner">
        <CardCourse
          v-for="(course, index) in courses"
          :key="`${course.id}.${index}`"
          :course="course"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardCourse from "@/components/CardCourse";

export default {
  components: {
    CardCourse,
  },

  data() {
    return {
      courses: [],
    };
  },

  mounted() {
    this.$axios.get("/missions").then((res) => (this.courses = res.data));
  },
};
</script>

<style>
</style>
