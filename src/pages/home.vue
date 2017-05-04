<template>
    <div class='m-home'>
        <m-head></m-head>
        <div class='home-content padding-top'>
            <m-home-item v-for='item in homeData.slice(0, 3)' :homeItem='item' :key='item.id'></m-home-item>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import mHead from '../components/head'
    import mHomeItem from '../components/homeItem'
    export default{
        data(){
            return {
                title: '首页'
            }
        },
        created(){
            console.log(this.homeData)
        },
        components: {mHead, mHomeItem},
        computed: mapState({
            homeData(state){
                return state.home.homeData.subjects
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