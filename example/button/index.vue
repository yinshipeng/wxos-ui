<template>
    <div class="wx-demo">
        <wx-button>测试</wx-button>
    </div>
</template>
<script>
    import { WxButton } from '../../index'

    export default {
        data () {
            return {
                msg: 'hello vue'
            }
        },
        components: {
            WxButton
        }
    }
</script>
<style src="../_public/index.css"></style>
