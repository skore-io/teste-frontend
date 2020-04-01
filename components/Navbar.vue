<template>
  <nav>
    <p>
      <img src="~/assets/skore-logo.png" alt="Logotipo da Skore.io">
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
  height: 2rem;
  align-items: center;
}

ul > li {
  list-style-type: none;
}

ul > li > a {
  color: grey;
  text-decoration: none;
}

img {
  height: 32px;
}

</style>
