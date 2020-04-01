<template>
  <nav>
    <p>
      <strong>
        Teste Frontend
      </strong>
    </p>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'index'}">Home</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

nav {
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid lightgrey;
}

ul > li {
  list-style-type: none;
}

ul > li > a {
  color: grey;
  text-decoration: none;
}

</style>
