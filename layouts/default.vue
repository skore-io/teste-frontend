<template>
    <div class="default-layout">
        <the-navbar />
        <main-container :title="pageTitle">
            <nuxt />
        </main-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheNavbar from '~/components/Navigation/TheNavbar.vue'
export default Vue.extend({
    name: 'DefaultLayout',
    components: {
        TheNavbar,
    },
    computed: {
        pageTitle() {
            return this.$store.state.containerTitle 
        }
    },
})
</script>

<style>
.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
    cursor: pointer;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
    cursor: pointer;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>
