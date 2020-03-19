<template>
    <section class="missions-page">
        <h1>Missions List</h1>
        <mission-list :missions="missions" />
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import MissionList from '~/components/Mission/MissionList.vue'
export default Vue.extend({
    name: 'MissionsPage',
    components: {
        MissionList,
    },
    computed: {
        missions() {
            return this.$store.state.missions.missions
        }
    }
})
</script>

<style scoped>
</style>