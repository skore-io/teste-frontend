<template>
    <div class="mission-list">
        <div v-for="mission in missions" :key="mission.id">
            <mission-card :mission="mission" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import MissionCard from './MissionCard.vue'
import { IMission } from '~/models/mission'
export default Vue.extend({
    name: 'MissionList',
    components: {
        MissionCard,
    },
    props: {
        missions: {
            type: Array,
            required: true
        } as PropOptions<IMission[]>,
    },
})
</script>

<style scoped>
</style>