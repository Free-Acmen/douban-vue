<template>
    <div class='loading' v-html='svg' :style='style'></div>
</template>

<script>
    import * as loadingType from './svg'
    export default{
        data(){
            return {

            }
        },
        props: ['type', 'color', 'width'],
        computed: {
            svg(){
                return loadingType[this.type]
            },
            style(){
                return `fill: ${this.color}; width: ${this.width}rem;`
            }
        }
    }
</script>

<style lang='scss' scoped>
    .loading{
        margin: 0 auto;
        padding:.3rem 0;
    }
</style>