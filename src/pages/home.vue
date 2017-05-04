<template>
    <div class='m-home'>
        <m-head></m-head>
        <div class='home-content padding-top'>
            这是首页 啥球都还没搞
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import mHead from '../components/head'

    export default{
        data(){
            return {
                title: '首页'
            }
        },
        created(){
        
        },
        components:{mHead},
        computed: mapState({
            homeData(state){
                return state.home.homeData
            }
        }),
        methods: {
    
        }
    }
</script>

<style lang='scss' scoped>
    .m-home{
          
    }
</style>