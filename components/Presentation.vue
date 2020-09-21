<template>
    <div class="presentation">
        <p class="presentation__salutation">Bem vindo,</p>
        <h1 class="presentation__user-name">Lucas Henrique</h1>
        <p class="presentation__message">Você já alcançou alguns de seus objetivos. Parabéns!</p>
    </div>
</template>

<script>
    export default { }
</script>

<style lang="scss">
    @import "@/assets/style/_variables.scss";

    .presentation {
        grid-area: presentation;
        display: grid;
        grid-auto-flow: row;
        grid-gap: .25rem;

        &__salutation {
            color: $color_light_hard;
        }
    }
</style>