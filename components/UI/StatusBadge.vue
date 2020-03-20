<template>
    <span
        class="status-badge"
        :class="[customStyle, styles]"
        :style="`background-color: ${bgColor}`"
    >{{text}}</span>
</template>

<script lang="ts">
import Vue, {PropOptions} from 'vue'
export default Vue.extend({
    name: 'StatusBadge',
    props: {
        text: {
            type: String,
            default: 'Badge'
        } as PropOptions<string>,
        absolute: {
            type: Boolean,
            default: false
        } as PropOptions<boolean>,
        bgColor: {
            type: String,
            default: '#ff6347'
        } as PropOptions<string>,
        customStyle: {
            type: String,
            default: ''
        } as PropOptions<string>
    },
    computed: {
        styles() {
            return {'absolute': this.absolute}
        },
    },
})
</script>

<style scoped lang="scss">
.status-badge {
    z-index: 9999;
    padding: 0.25rem 0.75rem;
    font-size: 14px;
    color: white;
    background-color: tomato;
    border-radius: 5px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
    &.absolute {
        position: absolute;
    }
}
</style>