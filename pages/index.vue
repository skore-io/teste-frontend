<template>
  <div class="welcome">
    <div>
      <p>Bem vindo!</p>

      <p><nuxt-link :to="`/missions`">Ir para a listagem</nuxt-link></p>
    </div>
  </div>
</template>

<style>
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  text-align: center;
  font-size: 60px;
}

.welcome a {
  font-size: 30px;
}
</style>
