<template>
    <div class="wx-overlay" ref="overlay" v-if="visible" :style="overlayStyle" @click="overlayClicked">
        <slot></slot>
    </div>
</template>
<script>
    const animation = weex.requireModule('animation')
    export default {
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            opacity: {
                type: [Number, String],
                default: 0.6
            }
        },
        computed: {
            overlayStyle () {
                return {
                    backgroundColor: `rgba(0, 0, 0,${this.opacity})`
                }
            }
        },
        methods: {
            overlayClicked () {
                this.$emit('wxClick')
            }
        }
    }
</script>
<style src="../../theme/overlay.css"></style>
