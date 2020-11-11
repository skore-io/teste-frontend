<template>
  <div>
    <card-course
      v-for="(course, index) in filteredCourses"
      :key="`${course.id}.${index}`"
      :course="course"
    />
  </div>
</template>

<script type="application/javascript">
import CardCourse from '../components/CardCourse';

export default {
  components: {
    CardCourse,
  },

  data() {
    return {
      courses: [],
      filteredCourses: [],
    };
  },
  computed: {
    selectedFilter() {
      return this.$store.getters.filter;
    },
  },
  watch: {
    selectedFilter(newValue) {
      if (newValue === 'all') {
        this.filteredCourses = this.courses;
        return;
      }
      this.filteredCourses = this.courses.filter((course) => {
        return course.status === newValue;
      });
    },
  },
  mounted() {
    this.$axios.get('/missions').then((res) => {
      this.courses = res.data;
      this.filteredCourses = res.data;

      const filters = [];
      res.data.forEach((course) => {
        if (!filters.includes(course.status)) {
          filters.push(course.status);
        }
      });
      this.$store.commit('setFilters', filters);
    });
  },
};
</script>
