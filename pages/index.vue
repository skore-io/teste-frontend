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
.main_page {
  padding: 0 10px;
  margin: 0;
  background: #e7ebed;
  color: #ecf0f1;
  font-family: "Roboto";
  min-height: 100vh;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
}

a:link,
a:hover,
a:active,
a:visited {
  color: #fff;
  text-decoration: none;
}

#__nuxt {
  width: 100%;
  height: 100%;
}
.contain {
  width: 100%;
}
.row {
  overflow: scroll;
  width: 100%;
}
.row__inner {
  -webkit-transition: 450ms -webkit-transform;
  transition: 450ms -webkit-transform;
  transition: 450ms transform;
  transition: 450ms transform, 450ms -webkit-transform;
  font-size: 0;
  white-space: nowrap;
  margin: 70.3125px 0;
  padding-bottom: 10px;
}

.row__inner:hover {
  -webkit-transform: translate3d(-62.5px, 0, 0);
  transform: translate3d(-62.5px, 0, 0);
}
.row__inner:hover .course {
  opacity: 0.3;
}
.row__inner:hover .course:hover {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  opacity: 1;
}

.row__inner:hover .course:first-child {
  margin-left: 3em;
}
.row__inner:hover .course:last-child {
  margin-right: 3em;
}
</style>
