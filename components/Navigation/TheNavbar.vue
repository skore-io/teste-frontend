<template>
    <header class="the-header">
        <div class="logo">
            <nuxt-link to="/">SAROK</nuxt-link>
        </div>
        <nav class="navigation-items">
            <ul class="nav-list">
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/missions">Mission</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'TheNavbar'
})
</script>

<style scoped lang="scss">
.the-header {
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    background: linear-gradient(45deg, #00c58e 0%, #2f495e 35%, #108775 90%);
}
@media (min-width: 768px) {
    .the-header {
        padding: 0 125px;
    }
}
.logo {
    margin: 0 10px;
    font-size: 1.3em;
    a {
        color: white;
    }
}
.nav-list {
    display: flex;
    .nav-item {
        margin: 0 10px;
        .nav-link {
            color: white;
            transition: border 0.3s ease-in-out;
            &:hover,
            &:active,
            &.active {
                border-bottom-width: 2px;
                border-bottom-style: solid;
                border-bottom-color: white;
            }
        }
    }
}
</style>