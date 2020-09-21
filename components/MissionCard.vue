<template>
    <NLink :to="`/missions/${this.id}`">
        <div class="mission-card">
            <img class="mission-card__image" :src="image || standardImage"/>
            <h3 class="mission-card__name">{{name}}</h3>
            <div class="mission-card__description">{{progress}}%</div>
            <div 
                class="mission-card__progress-bar"
                :style="{ width: progress+'%' }">
            </div>
        </div>
    </NLink>
</template>

<script>
    export default {
        name: "MissionCard",
        props: ["id", "name", "progress", "image"],

        data() {
            return {
                standardImage: require("@/assets/images/rocket.png")
            }
        }
    }
</script>

<style lang="scss">
    @import "@/assets/style/_variables.scss";

    .mission-card {
        display: grid;
        grid-template-columns: 4rem auto;
        grid-gap: .5rem;
        grid-template-areas: "image         name"
                                "image         description"
                                "progress-bar  progress-bar";
        height: 6rem;
        background-color: $color_light;
        align-content: center;
        border-radius: .5rem;
        padding: 0 .5rem;

        &__image {
            grid-area: image;
            object-fit: cover;
            height: 4rem;
            width: 4rem;
        }

        &__name {
            grid-area: name;
        }

        &__description {
            grid-area: description;
        }

        &__progress-bar {
            grid-area: progress-bar;
            height: .5rem;
            width: 0%;
            background-image: linear-gradient(to right, $color_sucess_dark, $color_success);
        }
    }
</style>