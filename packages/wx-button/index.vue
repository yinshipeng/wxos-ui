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
            textSize: {
                type: String,
                default: '32px'
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
                    fontSize: this.textSize
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
<style src="../../theme/button.css"></style>
