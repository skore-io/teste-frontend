<template>
    <div class="missions-step">
        <h3 class="missions-step__title">
            {{ name }}
        </h3>

        <p class="missions-step__description">
            Empresa Exemplo A
        </p>
    </div>
</template>

<script>
    export default {
        props: ["name", "progress"]
    }
</script>

<style lang="scss">
    @import "@/assets/style/_variables.scss";

    .missions-step {
        grid-area: steps-list;
        display: grid;
        grid-auto-flow: row;
    }
</style>