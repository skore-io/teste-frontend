<template>
  <select class="filter">
      <option value="Filtre por status" hidden>Filtre por status</option>
      <option value="IN_PROGRESS">IN_PROGRESS</option>
      <option value="NOT_STARTED">NOT_STARTED</option>
      <option value="NOT_STARTED">NOT_STARTED</option>
      <option value="BLOCKED">BLOCKED</option>
  </select>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.filter {
    margin: 70px auto 0;
    width: 300px;
    border-radius: 5px;
    padding: 7px;
    display: block;
}

</style>