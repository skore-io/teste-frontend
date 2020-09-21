<template>
    <div class="missions-page">
        <HeaderBase />
        <Presentation />
        <MissionList />
    </div>
</template>

<script>
    import MissionList from "~/components/MissionList";
    import HeaderBase from "~/components/HeaderBase";
    import Presentation from "~/components/Presentation";

    export default {
        components: {
            MissionList,
            HeaderBase,
            Presentation
        },
    }
</script>

<style lang="scss">
    @import "@/assets/style/_variables.scss";

    .missions-page {
        display: grid;
        grid-gap: 2rem;
        grid-template-areas: "header-base"
                             "presentation"
                             "missions-list";
    }
</style>