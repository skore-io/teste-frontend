<template>
    <div class="progress-bar">
        <div v-if="progress" class="progress-bar__label">
            <span class="watched">WATCHED</span>
            <span class="progress">{{progress}}%</span>
        </div>
        <div class="progress-bar__outer" :style="barStyles">
            <div class="progress-bar__inner" :style="styles"></div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'ProgressBar',
    props: {
        total: {
            type: String,
            default: '100'
        },
        progress: {
            type: String,
            default: '20'
        },
        bg: {
            type: String,
            default: ''
        },
    },
    computed: {
        styles(): Object {
            return {
                width: this.progress + '%',
                backgroundColor: this.bg
            }
        },
        barStyles(): Object {
            return {
                width: this.total + '%',
            }
        },
    },
})
</script>

<style scoped lang="scss">
$progress-height: 1em;
.progress-bar {
    width: 100%;
    margin: 1em 0;
    &__label {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2px;
        font-size: 14px;
        color: grey;
    }
    &__outer {
        height: $progress-height;
        border-radius: 2px;
        background-color: #e9e9e9;
        transition: width 0.3s ease-out;
    }
    &__inner {
        height: $progress-height;
        background-color: #3b8070;
    }
}
</style>