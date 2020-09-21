<template>

    <div class="header-base">
        <NLink :to="`/missions`" v-if="backButton">
            <div class="header-base__back-button" ></div>
        </NLink>
        <div class="header-base__menu" v-else>
            <div class="bar1"></div>
            <div class="bar2"></div>
        </div>
        <img class="header-base__avatar" src="~/assets/images/avatar.svg"/>  
    </div>

</template>

<script>
    export default {
        props: ['backButton']
    }
</script>

<style lang="scss">
    @import "@/assets/style/_variables.scss";

    .header-base {
        grid-area: header-base;
        display: grid;
        grid-template-columns: 1fr max-content;
        height: 3rem;
        align-items: center;

        &__menu {
            display: grid;
            align-content: space-around;
            height: 1.5rem;
            width: 1.5rem;

            .bar1 {
                width: 100%;
                height: .25rem;
                background-color: $color_dark;
            }

            .bar2 {
                width: 50%;
                height: .25rem;
                background-color: $color_dark;
            }
        }

        &__back-button { 
            border: solid black;
            border-width: 0 0.25rem 0.25rem 0;
            display: inline-block;
            padding: 0.375rem;
            transform: rotate(135deg);
        }

        &__avatar {
            height: 2rem;
            padding: .25rem;
            border-radius: 50%;
            background-color: $color_secondary;
        }
    }
</style>