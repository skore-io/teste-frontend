<template>
    <article class="mission-page">
        <header class="mission-page__header">
            <img class="mission-page__thumbnail" :src="mission.thumb_url" alt="Mission Image" />
            <div class="title">
                <span class="status">Status: {{missionStatus}}</span>
                <span
                    v-if="mission.due_date"
                    class="duedate"
                >Due: {{mission.due_date.available_at | date}}</span>
            </div>
        </header>
        <section class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit pellentesque pharetra. Proin fermentum fringilla justo, ac semper mi mattis non. Integer lacus quam, consequat eu consectetur ac, euismod tristique libero. Integer et lectus tristique, ultricies purus at, imperdiet urna. Sed dapibus blandit nisl sed pulvinar. Vestibulum aliquam leo sit amet diam efficitur cursus. Maecenas scelerisque sapien eu magna congue tincidunt. Proin viverra sed risus et elementum. Mauris sit amet dolor arcu. Cras auctor tincidunt lorem non tempus. Quisque viverra mauris consectetur ultrices facilisis. Quisque sit amet molestie magna. Donec tempus dignissim ligula. Vivamus at erat libero.
            Nam erat libero, tincidunt nec sodales in, commodo a libero. Quisque in convallis mi, in egestas sapien. Ut elementum mauris nibh, ut molestie justo efficitur quis. Ut varius velit elit, sed sagittis dolor sodales bibendum. Integer eget justo faucibus, tristique augue ac, sagittis dui. Nulla eu nulla metus. Nulla feugiat odio rhoncus elementum tincidunt. Mauris cursus ante sem, et tempor sapien sollicitudin et. Ut varius a orci imperdiet venenatis. Nullam et pulvinar magna.
        </section>
        <button @click="$router.push('/missions')" class="btn-missions button--green">Back to Missions</button>
    </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Status } from '~/types/status'
import MISSION_API from '~/services/missions'
export default Vue.extend({
    name: 'MissionPage',
    async asyncData({ params }) {
        try {
            const mission = await MISSION_API.get(params.id)
            return { mission }
        } catch (error) {
            throw Error(error)
        }
    },
    created() {
        this.$store.commit('setContainerTitle', this.mission.name)
    },
    computed: {
        missionStatus(): Status {
            return Status[this.mission.status]
        },
    },
})
</script>

<style scoped lang="scss">
.mission-page {
    padding: 0 150px;
    display: flex;
    flex-wrap: wrap;
    &__thumbnail {
        object-fit: none;
        margin-bottom: auto;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        transform: translateY(-10%);
    }
    &__header {
        width: 100%;
        display: flex;
        div.title {
            padding: 4em 1.5em;
            width: 100%;
            display: flex;
            font-size: 1em;
            justify-content: space-between;
        }
    }
    section.description {
        margin: 1em 0;
        text-align: justify;
    }
    .btn-missions {
        margin: auto;
    }
}
</style>