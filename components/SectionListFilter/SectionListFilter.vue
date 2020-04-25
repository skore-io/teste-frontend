<template>
  <div class="SectionListFilter container">
    <h3>{{ title }}</h3>
    <ul class="filter">
      <li
        @click="$emit('select', {label: 'todas', value: null})"
        :class="active === 'todas' ? 'selected' : ''"
      >todas</li>
      <li
        v-for="(filter, index) in filters"
        :key="index"
        @click="$emit('select', filter)"
        :class="filter.label === active ? 'selected' : ''"
      >{{ filter.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SectionListFilter",
  props: {
    title: {
      type: String,
      required: true
    },
    filters: {
      type: [Array, Object]
    },
    active: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/style/_colors.scss";
@import "@/assets/style/_variables.scss";

.SectionListFilter {
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h3 {
    font-size: calc(#{$p} * 1.5);
    color: $color_primary;
  }
  & ul {
    display: flex;
    align-items: center;

    & li {
      cursor: pointer;
      user-select: none;
      padding: 0.2vh 0.8vw;
      border-radius: 20px;
      color: $color_dark;
      font-size: calc(#{$p} * 0.8);
      text-transform: capitalize;
      transition: all 0.15s ease-in-out;

      &:hover {
        color: $color_primary;
        background: $color_primary_soft;
      }
    }

    & .selected {
      color: white;
      background: $color_primary;
    }
  }
}
@media all and (min-width: 280px) and (max-width: 960px) and (orientation: portrait) {
  .SectionListFilter {
    flex-direction: column;
    padding: 0;

    & ul {
      margin-top: 2vh;
      flex-wrap: wrap;
      justify-content: center;

      & li {
        padding: 0.6vh 3vw;
        margin: 0.3vh;
        font-size: calc(#{$p} * 1);
      }
    }
  }
}
@media all and (min-height: 280px) and (max-height: 640px) and (orientation: landscape) {
  .SectionListFilter {
    flex-direction: column;
    padding: 0;

    & ul {
      margin-top: 2vh;
      flex-wrap: wrap;
      justify-content: center;

      & li {
        padding: 1vh 1.8vw;
        margin: 0.3vh;
        font-size: calc(#{$p} * 1);
      }
    }
  }
}
</style>
