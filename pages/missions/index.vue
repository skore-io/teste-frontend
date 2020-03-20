<template>
    <div class="missions-page">
        <mission-card
            v-for="mission in missions"
            :key="mission.id"
            :mission="mission"
            @click="handleMissionTransition"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MissionCard from '~/components/Mission/MissionCard.vue'
export default Vue.extend({
    name: 'MissionsPage',
    components: {
        MissionCard,
    },
    created () {
        this.$store.commit('setContainerTitle', 'SAROK MISSIONS')
    },
    computed: {
        missions() {
            return this.$store.state.missions.missions
        }
    },
    methods: {
        handleMissionTransition(missionId) {
            this.$router.push(`/missions/${missionId}`)
        }
    },
})
</script>

<style scoped>
.missions-page {
    display: grid;
    gap: 1.5em;
    grid-template-columns: repeat(2, 1fr);
}
</style>