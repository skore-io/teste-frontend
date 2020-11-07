<template>
  <div class="course">
    <NuxtLink :to="`/course/${course.id}`">
      <div class="course__block" v-if="course.status === 'BLOCKED'"></div>

      <img
        class="course__img"
        v-if="course.thumb_url"
        :src="course.thumb_url"
        alt=""
      />
      <img
        class="course__img"
        v-else
        src="https://assets.website-files.com/5dcaf276c897155ba01769f4/5ed166315b6f49570099bc84_skore_brand_teal.svg"
        alt=""
      />
      <div class="course__details"></div>
      <div class="progress" v-if="course.enrollment">
        <span class="progress__bar">
          <span
            class="progress__bar__completed"
            :style="{ width: `${course.enrollment.percentage}%` }"
          ></span>
        </span>
      </div>
      <div class="course__title">{{ course.name }}</div>
    </NuxtLink>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["course"],
};
</script>

<style>
.course {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 140.625px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  -webkit-transition: 450ms all;
  transition: 450ms all;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}
.course__img {
  width: 250px;
  height: 140.625px;
  -o-object-fit: cover;
  object-fit: cover;
}
.course__details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  font-size: 10px;
  opacity: 0;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 0.9)),
    to(rgba(0, 0, 0, 0))
  );
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-transition: 450ms opacity;
  transition: 450ms opacity;
}
.course__details:after,
.course__details:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: #000;
}
.course__details:after {
  margin-top: -25px;
  margin-left: -25px;
  width: 50px;
  height: 50px;
  border: 1px solid #6eecde;
  line-height: 50px;
  text-align: center;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.course__details:before {
  content: "+";
  left: 0;
  width: 100%;
  font-size: 20px;
  margin-left: 0px;
  margin-top: -12px;
  text-align: center;
  z-index: 2;
}
.course:hover .course__details {
  opacity: 1;
}
.details .course__title {
  position: absolute;
  bottom: 0;
  padding: 10px;
  opacity: 1;
}

.course__title {
  font-size: 15px;
  padding: 0px 0px;
  color: #324047;
}
.course:hover ~ .course {
  -webkit-transform: translate3d(125px, 0, 0);
  transform: translate3d(125px, 0, 0);
}

.course .progress {
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  background-color: #a9a9a9;
  transition: opacity 350ms;
  border: 1px solid #f1faf9;
}

.course .progress__bar__completed {
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  background-color: #02ceb2;
}

.course .progress__bar {
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

.course__block {
  height: 100%;
  width: 100%;
  background: #000000bf;
  position: absolute;
  z-index: 3;
  cursor: not-allowed;
}
</style>
