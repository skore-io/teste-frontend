<template>
  <div class="SectionListFilter container">
    <h3>{{ title }}</h3>
    <ul class="filter">
      <li
        v-for="(filter, index) in filters"
        :key="index"
        @click="$emit('select', filter)"
        :class="filter === active ? 'selected' : ''"
      >
        {{ filter }}
      </li>
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
      type: Array,
      default: ["filtro", "filtro", "filtro"]
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
      padding: 0.2vh 1vw;
      border-radius: 20px;
      color: $color_dark;
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
</style>
