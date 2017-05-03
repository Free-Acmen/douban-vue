<template>
    <div class='m-star'>
        <div v-if='!average'>
            暂无评分
        </div>
        <div v-else>
            <img v-for='n in 5' :src='imgSrc(n)' :style=`width: ${length}rem; height: ${length}rem`>
        </div>
    </div>
</template>

<script>
import starGrey from '../assets/image/starGrey.png'
import starActive from '../assets/image/starActive.png'
export default{
    data(){
        return{

        }
    },
    props: ['average', 'length']
    methods: {
        imgSrc(n){
            return ( 
                (2 * n - 1 > this.average) ?
                    starGrey : starActive 
            )
        }
    }
}
</script>

<style lang='scss' scoped>
    .m-star{
        display: inline-block;
    }
</style>