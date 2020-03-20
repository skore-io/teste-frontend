<template>
    <div class="mission-card" @click="onClick">
        <status-badge
            :text="missionStatus"
            :bg-color="getStatusColors(mission.status)"
            custom-style="mission-badge"
            absolute
        />
        <img class="mission-card__thumbnail" :src="mission.thumb_url" alt="Mission image" />
        <article class="mission-card__text">
            <header class="header">
                <h2>{{mission.name}}</h2>
                <span v-show="dueDate" class="due-date">Due: {{dueDate | date}}</span>
            </header>
            <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit pellentesque pharetra.  Proin fermentum fringilla justo, ac semper mi mattis non.
            </p>
            <div class="progression">
                <progress-bar v-show="mission.enrollment" :progress="missionProgress" />
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IMission } from '~/models/mission'
import { Status } from '~/types/status'
import { getStatusColors } from '~/common/utils'
import StatusBadge from '~/components/UI/StatusBadge.vue'
import ProgressBar from '~/components/UI/ProgressBar.vue'
export default Vue.extend({
    name: 'MissionCard',
    components: {
        StatusBadge,
        ProgressBar
    },
    props: {
        mission: {
            type: Object,
            required: true
        } as PropOptions<IMission>,
    },
    computed: {
        dueDate(): number | string {
            return this.mission.due_date?.available_at || ''
        },
        missionStatus(): Status {
            return Status[this.mission.status]
        },
        missionProgress(): string {
            return this.mission.enrollment?.percentage.toString() || ''
        }
    },
    methods: {
        getStatusColors,
        onClick() {
            this.$emit('click', this.mission.id)
        }
    }
})
</script>

<style scoped lang="scss">
.mission-card {
    display: flex;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
    transition: all 0.25s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
            0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }
}
.mission-card__text {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.75em;
    h2 {
        font-size: 1.4em;
        font-weight: 600;
    }
    .due-date {
        display: block;
        font-size: 14px;
    }
    .mission-button {
        align-self: flex-end;
    }
    .description {
        text-align: justify;
        font-size: 14px;
    }
}
.mission-link {
    position: relative;
    font-weight: 100;
    text-decoration: none;
    color: black;
}
.mission-badge {
    transform: translate(-10px, -5px);
    box-shadow: 0 2px 14px rgba(255, 255, 255, 0.25);
}
</style>
