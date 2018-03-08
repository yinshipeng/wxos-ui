<template>
    <div class="wx-demo">
        <wx-button @wxClick="visible=true">打开Overlay</wx-button>
        <wx-overlay :visible="visible" @wxClick="visibleClicked"></wx-overlay>
    </div>
</template>

<script>
    import WxOverlay from '../../packages/wx-overlay/index'
    import WxButton from '../../packages/wx-button/index'

    export default {
        data () {
            return {
                visible: false
            }
        },
        components: {WxOverlay, WxButton},
        methods: {
            visibleClicked () {
                this.visible = false
            }
        }
    }
</script>
<style src="../_public/index.css"></style>
