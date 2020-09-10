<template>
  <div class="header">
    <div class="logo-wrapper">
      <a href="https://skore.io/pt">
        <img 
          src="../assets/skore.svg" 
          alt="Skore Logo"
        >
      </a> 
    </div>
    <nav class="navbar">
      <a href="/">
        <img 
          src="../assets/ICON-Home.svg" 
          alt="Home Icon"
        >
      </a> 
      <a href="#">
        <img 
          src="../assets/ICON-User.svg" 
          alt="User Icon"
        >
      </a>
      <div 
        id="toggleBtn" 
        @click="$emit('toggle')"
      >
        <img 
          :src=" mode === 'light' ? require('../assets/ICON-DarkMode.svg') : require('../assets/ICON-WhiteMoon.svg') " 
          alt="DarkMode Icon"
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  emits: ['toggle'],

  props: {
    mode: {
      type: String,
      default: 'light'
    }
  }
  
}
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    height: 100px;
  }

  .logo-wrapper img {
    width: 150px;
    object-fit: contain;
    margin: 10px 20px;
  }

  .navbar {
    display: flex;
    margin-right: 5px;
  }

  .navbar img {
    width: 40px;
    margin-top: 15px;
    margin-right: 15px;
    cursor: pointer;
  }
</style>