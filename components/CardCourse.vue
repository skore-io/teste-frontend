<template>
  <div class="course" :style="{margin: marginCourse}">
    <div v-if="course.status === 'BLOCKED'" class="blocked"></div>
    <NuxtLink :to="`/course/${course.id}`">
      <div v-if="showImage" class="img-area">
        <img v-if="course.thumb_url" :src="course.thumb_url" alt="" />
        <img
          v-else
          src="https://assets.website-files.com/5dcaf276c897155ba01769f4/5ed166315b6f49570099bc84_skore_brand_teal.svg"
          alt=""
        />
      </div>
      <div class="title">{{ course.name }}</div>
      <div class="progress">
        <span class="progress-bar">
          <span
            class="progress-bar-percent"
            :style="{
              width: `${course.enrollment ? course.enrollment.percentage : 0}%`,
            }"
          ></span>
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    marginCourse: {
      type: String,
      default: () => {
        return '25px 0px 0px 25px';
      },
    },
    showImage: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
    course: {
      type: Object,
      default: () => {
        return {
          name: '',
          id: '',
          thumb_url: '',
          enrollment: {
            percentage: '',
          },
        };
      },
    },
  },
};
</script>

<style lang="css" scoped>
.course {
  width: 200px;
  float: left;
  background: #fff;
  position: relative;
}

.course .img-area {
  width: 100%;
  display: block;
  height: 320px;
}
.course .img-area img {
  width: 100%;
}

.course .progress {
  width: 100%;
  height: 2px;
  position: relative;
  left: 0;
  right: 0;
  background-color: #a9a9a9;
  transition: opacity 350ms;
  border: 1px solid #f1faf9;
}
.course .progress-bar-percent {
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  background-color: #02ceb2;
}
.course .progress-bar {
  display: block;
  position: relative;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.course .title {
  padding: 10px;
  text-decoration: none;
  color: #069682;
}

.course a {
  text-decoration: none;
}

.course .blocked {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  background: #0000008a;
  cursor: not-allowed;
}

@media only screen and (max-width: 600px) {
  .course {
    width: calc(100% - 40px);
    margin: 20px!important;
  }

  .course .img-area {
    height: initial;
  }
}
</style>
