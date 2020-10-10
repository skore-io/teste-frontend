<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

html {
  font-family: Roboto, sans-serif;
  font-size: 16px;

  background: #eee;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

a {
  color: #3aaf9f;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.container {
  max-width: 100%;
  width: 1300px;
  margin: auto;
  padding: 0 15px;
}
</style>
