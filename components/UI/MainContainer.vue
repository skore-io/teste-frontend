<template>
    <div class="main-container">
        <div class="hero">
            <h1 v-if="$props.title">{{title}}</h1>
        </div>
        <div class="main-content">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'MainContainer',
    props: {
        title: {
            type: String,
            default: ''
        },
    },
})
</script>

<style scoped lang="scss">
.hero {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2em;
    background: #5ac2a9;
    background: linear-gradient(45deg, #00c58e 0%, #2f495e 50%, #108775 90%);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
    h1 {
        margin-top: 2em;
        font-size: 2em;
        color: white;
    }
}
.main-content {
    margin: 0 auto;
    width: 100%;
    padding: 0 1.5em 1.5em;
    transform: translateY(-6%);
    transition: width 0.3s;
}
@media (min-width: 768px) {
    .hero h1 {
        font-size: 3em;
    }
    .main-content {
        padding: 0 150px;
    }
}
</style>