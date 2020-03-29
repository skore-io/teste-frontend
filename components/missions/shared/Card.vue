<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.card
  width: 340px
  background-color: rgba(white, .05)
  display: flex
  flex-direction: column
  align-items: center
  margin: 20px
  padding: 20px 30px 0
  border-radius: 8px
  margin-top: 60px
  color: white
  animation: fade .5s

  &:hover
    transform: translateY(-5px)

  h3
    margin: 10px 0
    font-weight: 700
    font-size: 24px
</style>
