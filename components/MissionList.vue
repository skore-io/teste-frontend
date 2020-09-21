<template>

    <div class="missions-list">
        <h2 class="missions-list__title">Missões</h2>

        <StepsFilter 
            :filter-items="filterItems" 
            @select="selectFilter"
        />
        
        <MissionCard 
            v-for="(mission, index) in filteredMissions"
            :key="mission.id+'_'+index"
            :id="mission.id"
            :name="mission.name"
            :progress="mission.enrollment ? mission.enrollment.percentage : 0"
            :image="mission.thumb_url"
        />
    </div>

</template>

<script>
    import { mapState, mapGetters } from "vuex";
    import StepsFilter from "~/components/StepsFilter";
    import MissionCard from "~/components/MissionCard";

    export default {
        components: {
            StepsFilter,
            MissionCard
        },

        data() {
            return {
                filterItems: [
                    {
                        text: "TODAS",
                        value: ""
                    },
                    {
                        text: "EM PROGRESSO",
                        value: "IN_PROGRESS"
                    },
                    {
                        text: "FINALIZADAS",
                        value: "COMPLETED"
                    },
                    {
                        text: "NÃO INICIADAS",
                        value: "NOT_STARTED"
                    },
                    {
                        text: "BLOQUEADAS",
                        value: "BLOCKED"
                    }
                ]
            };
        },

        computed: {
            ...mapState(["missions"]),
            ...mapGetters(["filteredMissions"])
        },

        methods: {
            selectFilter(value) {
                this.$store.commit("applyFilter", value);
            },

            loadMissions() {
                return this.$axios
                    .$get("https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions")
                    .then(res =>
                        this.$store.dispatch("loadMissions", {
                            data: res,
                            context: this
                        })
                    );
            }
        },

        async created() {
            await this.loadMissions();
        }
    }
</script>

<style lang="scss">
    @import "@/assets/style/_variables.scss";

    .missions-list {
        grid-area: missions-list;
        display: grid;
        grid-auto-flow: row;
        grid-gap: 1rem;

        .items {
            display: grid;
            grid-auto-flow: row;
            grid-gap: 1rem;
        }
    }

</style>