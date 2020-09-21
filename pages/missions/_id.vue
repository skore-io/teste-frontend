<template>
    <div class="mission-page" v-if="didLoad">
        <HeaderBase :back-button="true"/>
        <img 
            class="mission-page__banner" 
            :src="selectedMission.thumb_url"/>
        <h1 class="mission-page__title">
            {{ selectedMission.name }}
        </h1>
        <div class="mission-page__list">
            <MissionStep
                v-for="(step, index) in selectedMission.steps"
                :key="step.id+'_'+index"
                :name="step.name"
            />
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from "vuex";
    import MissionStep from "~/components/MissionStep";
    import HeaderBase from "~/components/HeaderBase";

    export default {
        components: {
            HeaderBase,
            MissionStep
        },

        data() {
            return {
                didLoad: false
            }
        },

        computed: {
            ...mapState(["missions"]),
            ...mapGetters(["selectedMission"])
        },

        methods: {
            getMission() {
                this.$axios
                .$get(`https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions/${this.$route.params.id}`)
                .then(res => {
                    this.$store.dispatch("loadMission", {
                        data: res,
                        context: this
                    })
                    this.didLoad = true;
                });
            }
        },

        async created() {
            if (this.$store.state.missions.length <= 0) {
                return
            } 

            await this.getMission();
        }
    }
</script>

<style lang="scss">
    @import "@/assets/style/_variables.scss";

    .mission-page {
        display: grid;
        grid-gap: 2rem;
        grid-template-areas: "header-base"
                             "banner"
                             "steps-list";

        &__banner {
            grid-area: banner;
            width: 100%;
            min-height: 20rem;
            height: 30vw;
            object-fit: cover;
            box-shadow: inset 0 0 .5rem #000000;
        }     
    }
</style>