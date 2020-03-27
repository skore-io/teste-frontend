<template>
  <div>
    <ListMissions />
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "~/components/UI/NavBar";
import ListMissions from "~/components/missions/ListMissions";

export default {
  components: {
    ListMissions
  },
  head: {
    title: "Skore - Lista de missões"
  }
};
</script>
