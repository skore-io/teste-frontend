<template>
  <div class="status">
    <div class="statusTitle">
      Status:
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script>
import steps from "../../functions/steps";
import missions from "../../functions/missions";

export default {
  props: {
    status: String,
    type: {
      type: String,
      default: "mission",
    },
  },
  computed: {
    helper() {
      return this.type === "mission" ? missions : steps;
    },

    name() {
      return this.helper.getStatusName(this.status);
    },
  },
};
</script>

<style scoped>
.status {
  width: 100%;
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-transform: capitalize;
}
.status .statusTitle {
  width: 100%;
  height: 24px;
  border-radius: 100%;
  margin-right: 5px;
}
span {
  font-weight: bold;
}
@media screen and (min-width: 768px) and (max-width: 1366px) {
  .status .statusTitle {
    height: 20px;
  }
}
</style>
