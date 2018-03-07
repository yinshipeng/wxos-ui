<template>
    <div class="wx-button" @click="handleClick">
        <text class="wx-text" :style="textStyles">
            <slot></slot>
        </text>
    </div>
</template>
<script>
    export default {
        props: {
            textColor: {
                type: String,
                default: '#ffffff'
            },
            textFontSize: {
                type: String,
                default: '36px'
            }
        },
        data () {
            return {
                textStyles: {},
            }
        },
        methods: {
            setStyle () {
                this.textStyles = {
                    color: this.textColor,
                    fontSize: this.textFontSize
                }
            },
            handleClick (e) {
                this.$emit('wxClick', e)
            }
        },
        created () {
            this.setStyle()
        }
    }
</script>
<style>
    @import "../../theme/wx-button.css";
</style>
