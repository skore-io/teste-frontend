<template>
  <div class="container">
    <div class="header">
      <div class="logo-wrapper">
        <a href="https://skore.io/pt">
          <img 
            src="../assets/skore.svg" 
            alt="Skore"
          >
        </a> 
      </div>
      <nav class="navbar">
        <div 
          class="icon animate"
          :class="mode" 
        />
        <div 
          class="icon animate"
          :class="mode"  
        />
        <div 
          class="icon animate"
          :class="mode" 
        />
      </nav>
    </div>

    <div 
      id="missions"
      :class="mode"
    />

    <div 
      class="filter-wrapper"
      :class="mode"
    >
      <div 
        class="filter-itens animate"
        :class="mode"
      />  
      <div 
        class="filter-itens animate"
        :class="mode"
      />  
      <div 
        class="filter-itens animate"
        :class="mode" 
      />  
      <div 
        class="filter-itens animate"
        :class="mode"
      />  
      <div 
        class="filter-itens animate"
        :class="mode"  
      />  
    </div>

    <div class="list-wrapper">
      <div 
        class="mission-template"
        :class="mode" 
      >
        <div class="alert">
          <span 
            class="status animate"
            :class="mode" 
          />
          <span 
            class="priority animate"
            :class="mode" 
          />
        </div>
        <div 
          class="image-wrapper"
          :class="mode"
        >
          <div 
            class="rocket-image animate" 
            :class="mode"
          />
        </div>
        <div 
          class="info-wrapper"
          :class="mode"
        >
          <div 
            class="mission-name animate"
            :class="mode" 
          />
          <div 
            class="meter animate"
            :class="mode" 
          />
        </div>
        <button 
          class="btn animate"
          :class="mode" 
        />      
      </div>
      <div 
        class="mission-template"
        :class="mode" 
      >
        <div class="alert">
          <span 
            class="status animate"
            :class="mode" 
          />
          <span 
            class="priority animate"
            :class="mode" 
          />
        </div>
        <div 
          class="image-wrapper"
          :class="mode"
        >
          <div 
            class="rocket-image animate" 
            :class="mode"
          />
        </div>
        <div 
          class="info-wrapper"
          :class="mode"
        >
          <div 
            class="mission-name animate"
            :class="mode" 
          />
          <div 
            class="meter animate"
            :class="mode" 
          />
        </div>
        <button 
          class="btn animate"
          :class="mode" 
        />      
      </div>
      <div 
        class="mission-template"
        :class="mode" 
      >
        <div class="alert">
          <span 
            class="status animate"
            :class="mode" 
          />
          <span 
            class="priority animate"
            :class="mode" 
          />
        </div>
        <div 
          class="image-wrapper"
          :class="mode"
        >
          <div 
            class="rocket-image animate" 
            :class="mode"
          />
        </div>
        <div 
          class="info-wrapper"
          :class="mode"
        >
          <div 
            class="mission-name animate"
            :class="mode" 
          />
          <div 
            class="meter animate"
            :class="mode" 
          />
        </div>
        <button 
          class="btn animate"
          :class="mode" 
        />      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shimmer',

  props: {
    mode: {
      type: String,
      default: 'light'
    }
  }
}
</script>

<style scoped>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    max-width: 1050px;
    margin: 0 auto;
  }

  .container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

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
    margin-right: 5px;
    display: flex;
  }

  .navbar .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--background-color);
    margin-top: 15px;
    margin-right: 15px;
  }

  .icon.dark {
    background-color: var(--DM-background-color);
  }

  #missions {
    width: 270px;
    height: 30px;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    margin-top: 30px;
    margin-left: 20px;
    position: relative;
  }

  #missions.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  .filter-wrapper {
    height: 60px;
    width: 680px;
    margin: 50px 0 35px 20px;
    padding: 20px 40px;
    border-radius: 20px;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .filter-wrapper.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  .filter-itens {
    height: 20px;
    width: 100px;
    padding: 5px 30px;
    background-color: var(--shimmer-color);
  }

  .filter-itens.dark {
    background-color: var(--DM-shimmer-color);
  }

  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  
  @media screen and (max-width: 720px) {
    .filter-wrapper {
      width: 660px;
    }   
  }
  
  @media screen and (max-width: 696px) {
    .filter-wrapper {
      display: grid;
      justify-self: start;
      grid-template-columns: 1fr;
      width: 180px;
      height: 200px;
      padding: 20px 10px;
    }

    .filter-itens {
      height: 15px;
      width: 140px;
    }

    input[type="radio"] {
      margin-right: 0;
    }
  }

  .mission-template {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 300px;
    height: 600px;
    border-radius: 30px;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    margin: 20px;
    padding: 20px 30px;
  }

  .mission-template.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  .alert {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  span.status {
    width: 100px;
    height: 35px;
    background-color: var(--shimmer-color);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }

  span.status.dark {
    background-color: var(--DM-shimmer-color);
  }

  span.priority {
    width: 124px;
    height: 35px;
    background-color: var(--shimmer-color);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }

  span.priority.dark {
    background-color: var(--DM-shimmer-color);
  }

  .image-wrapper .rocket-image {
    width: 240px;
    height: 384px;
    background-color: var(--shimmer-color);
    border-radius: 30px;
  }

  .image-wrapper .rocket-image .dark {
    background-color: var(--DM-shimmer-color);
  }

  .info-wrapper .mission-name {
    width: 240px;
    height: 25px;
    border-radius: 30px;
    background-color: var(--shimmer-color);
    margin: 7px 0;
  }

  .info-wrapper .mission-name .dark {
    background-color: var(--DM-shimmer-color);
  }

  .meter {
    display: flex;
    width: 250px;
    height: 12px;
    border-radius: 5px;
    background-color: var(--shimmer-color);
  }

  .meter.dark {
    background-color: var(--DM-shimmer-color);
  }

  button.btn {
    width: 140px;
    height: 40px;
    border-radius: 13px;
    margin-top: 25px;
    background-color: var(--shimmer-color);
    border: none;
    outline: none;
    cursor: pointer;
    appearance: none;
  }

  button.btn.dark {
    background-color: var(--DM-shimmer-color);
  }

  .animate {
    animation: shimmer 2s infinite linear;
    background: linear-gradient(to right, rgb(219, 218, 218) 4%, rgb(207, 207, 207) 25%, rgb(219, 218, 218) 36%);
    background-size: 1000px 100%;
  }

  .animate.dark {
    animation: shimmer 2s infinite linear;
    background: linear-gradient(to right, rgb(102, 102, 102) 4%, rgb(117, 117, 117) 25%, rgb(102, 102, 102) 36%);
    background-size: 1000px 100%;
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

</style>