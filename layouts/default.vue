<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="sass">
body
  margin: 0
  font-family: 'Source Sans Pro', sans-serif
  background-color: rgb(17, 17, 22)
  color: white
  font-size: 14px

  @media (min-width: 768px)
    font-size: 16px

@keyframes fade
  from
    transform: translateY(-50px)
    opacity: 0
  to
    opacity: 1
</style>
