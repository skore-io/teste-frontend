<template>

    <div class="step-filters" v-if="filterItems.length > 0">
        <div class="step-filters__content">
            <div
                class="step"
                v-for="(filter, index) in filterItems"
                :key="filter.value+'_'+index"
                :class="{ 'step--selected':  filter.value === filterKey }"
                @click="$emit('select', filter.value)">
                {{ filter.text }}
            </div>
            <div class="step-filters__last-space"></div>
        </div>
    </div>

</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        props: ["filterItems"],
        computed: {
            ...mapGetters(["filterKey"])
        }
    }
</script>

<style lang="scss">
    @import "@/assets/style/_variables.scss";

    .step-filters {
        margin: 0 -1.5rem;
        overflow-x: scroll;

        &__content {
            display: grid;
            grid-auto-flow: column;
            grid-gap: .5rem;
            height: 3rem;
        }

        &__last-space {
            width: 1.5rem;
        }

        .step {
            display: grid;
            justify-content: center;
            align-content: center;
            background-color: $color_light;
            font-size: .75rem;
            border-radius: 3rem;
            padding: 0 1.5rem;
            white-space: nowrap;
            font-weight: 700;
            cursor: pointer;

            &--selected {
                background-color: $color_primary;
                color: $color_light;
            }

            &:first-child {
                margin-left: 1.5rem;
            }
        }
    }
</style>