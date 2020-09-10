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

    <div class="mission__header">
      <div 
        class="mission__image"
        :class="mode"  
      />
      <div class="mission__data">
        <div 
          class="mission__name"
          :class="mode"  
        />
        <div 
          class="mission__progress"
          :class="mode" 
        >
          <p 
            class="mission__steps animate"
            :class="mode"
          />
          <p 
            class="mission__concluded animate"
            :class="mode"  
          />
          <div 
            class="mission__progress-bar animate"
            :class="mode"  
          />
        </div>
      </div>
    </div>

    <div 
      class="steps__background"
      :class="mode" 
    >
      <div class="step">
        <span 
          class="step__circle animate"
          :class="mode"  
        />
        <div class="step__data">
          <p 
            class="step__count animate"
            :class="mode"  
          />
          <div 
            class="step__details animate"
            :class="mode"  
          />
        </div>
      </div>
      <div class="step">
        <span 
          class="step__circle animate"
          :class="mode"  
        />
        <div class="step__data">
          <p 
            class="step__count animate"
            :class="mode"  
          />
          <div 
            class="step__details animate"
            :class="mode"  
          />
        </div>
      </div>
      <div class="step">
        <span 
          class="step__circle animate"
          :class="mode"  
        />
        <div class="step__data">
          <p 
            class="step__count animate"
            :class="mode"  
          />
          <div 
            class="step__details animate"
            :class="mode"  
          />
        </div>
      </div>
      <div class="step">
        <span 
          class="step__circle animate"
          :class="mode"  
        />
        <div class="step__data">
          <p 
            class="step__count animate"
            :class="mode"  
          />
          <div 
            class="step__details animate"
            :class="mode"  
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShimmerDetails',

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

  .mission__header {
    display: flex;
    margin-top: 30px;
    margin-left: 20px;
  }

  .mission__data {
    width: 100%;
  }

  .mission__name {
    width: 70%;
    height: 60px;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    position: relative;
    margin-left: 30px;
  }

  .mission__name.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  .mission__image {
    width: 180px;
    height: 240px;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    border-radius: 30px;
  }

  .mission__image.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  .mission__progress {
    width: 320px;
    height: 80px;
    padding: 15px;
    margin-top: 30px;
    margin-left: 32px;
    border-radius: 15px;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    display: grid;
    place-self: center;
    grid-template-areas: 
      "steps concluded"
      "bar bar"
    ;
  }

  .mission__progress.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  .mission__steps {
    grid-area: steps;
    place-self: center;
    width: 100px;
    height: 15px;
    background-color: var(--shimmer-color);
    box-shadow: var(--box-shadow);
  }

  .mission__steps.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  .mission__concluded {
    grid-area: concluded;
    place-self: center;
    width: 120px;
    height: 15px;
    background-color: var(--shimmer-color);
    box-shadow: var(--box-shadow);
  }

  .mission__concluded.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  .mission__progress-bar {
    grid-area: bar;
    place-self: center;
    display: flex;
    width: 250px;
    height: 12px;
    border-radius: 5px;
    background-color: var(--shimmer-color);
    box-shadow: var(--box-shadow);
  }

  .mission__progress-bar.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  .steps__background {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 720px;
    border-radius: 80px;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    margin: 30px 20px 10px 20px;
    padding: 60px 100px;
  }

  .steps__background.dark {
    background-color: var(--DM-background-color);
    box-shadow: var(--DM-box-shadow);
  }

  .step {
    display: flex;
    height: 200px;
  }

  span.step__circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 8px solid var(--background-color);
    background-color: var(--shimmer-color);
    position: relative;
  }

  span.step__circle.dark {
    border: 8px solid var(--DM-background-color);
    background-color: var(--DM-shimmer-color);
  }

  span.step__circle::after {
    position: absolute;
    z-index: -1;
    top: 100%;
    left: 50%;
    width: 2px;
    height: 180px;
    content: '';
    background-color: var(--shimmer-color);
  }

  span.step__circle.dark::after {
    background-color: var(--DM-shimmer-color);
  }

  .step:last-child > span {
    width: 15px;
    height: 15px;
    margin-left: 8px;
  }

  .step:last-child > div {
    display: none;
  }

  .step:last-child > span::after {
    display: none;
  }

  .step__data {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }

  p.step__count {
    width: 100px;
    height: 25px;
    background-color: var(--shimmer-color);
    box-shadow: var(--box-shadow);
  }

  p.step__count.dark {
    background-color: var(--DM-shimmer-color);
    box-shadow: var(--DM-box-shadow);
  }

  .step__details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 100px;
    background-color: var(--shimmer-color);
    box-shadow: var(--box-shadow);
    border-radius: 18px;
    margin-top: 20px;
  }

  .step__details.dark {
    background-color: var(--DM-shimmer-color);
    box-shadow: var(--DM-box-shadow);
  }

  .step__icon {
    width: 50px;
    background-color: var(--background-color);
    margin-left: 20px;
    margin-right: 5px;
  }

  .step__icon.dark {
    background-color: var(--DM-background-color);
  }

  .step__text {
    display: flex;
    flex-direction: column;
    width: 220px;
    
  }

  .step__title {
    width: 100px;
    height: 10px;
    background-color: var(--background-color);
    padding-bottom: 5px;
  }

  .step__title.dark {
    background-color: var(--DM-background-color);
  }

  .step__status {
    width: 80px;
    height: 10px;
    background-color: var(--background-color);
  }

  .step__status.dark {
    background-color: var(--DM-background-color);
  }

  .step__enter {
    display: flex;
    justify-content: center;
    width: 80px;
    height: 100px;
    background-color: var(--background-color);
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
  }

  .step__enter.dark {
    background-color: var(--DM-background-color);
  }

  .enter__icon {
    width: 40px;
    background-color: var(--background-color);
  }

  .enter__icon.dark {
    background-color: var(--DM-background-color);
  }

  @media screen and (max-width: 745px) {
    .steps__background {
      width: 540px;
      padding: 60px 30px;
    }
  }

  @media screen and (max-width: 580px) {
    .mission__name {
      margin-left: 0;
    }
    .mission__image {
      display: none;
    }
    .mission__progress {
      margin-left: 0;
    }    
    .steps__background {
      width: 340px;
      padding: 60px 20px;
    }
    p.step__count {
      width: 100px;
      height: 25px;
    }
    .step__details {
      width: 260px;
    } 
    .step__icon {
      width: 40px;
      margin-left: 20px;
      margin-right: 8px;
    }
    .step__text {
      width: 150px;
    }
    .step__title {
      width: 80px;
      height: 8px;
    }
    .step__status {
      width: 60px;
      height: 8px;
    }
    .enter__icon {
      width: 30px;
    }
    .step__data {
      padding: 0 5px;
    }
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