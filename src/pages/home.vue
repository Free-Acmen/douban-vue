<template>
    <div class='m-home'>
        <m-head></m-head>
        <div class='home-content padding-top' ref='loading'>
            <m-home-item v-for='item in homeData.slice(0, 3)' :homeItem='item' :key='item.id'></m-home-item>
            <div class='loading'>loading...</div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {loadMore} from '../config/utils'
    import mHead from '../components/head'
    import mHomeItem from '../components/homeItem'
    export default{
        data(){
            return {
                title: '首页'
            }
        },
        created(){
            
        },
        mouted(){
            loadMore(this.$refs.loading, () => {
                console.log(111)
            })
            console.log(this.$refs.loading)
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
         .loading{
             text-align: center;
             color: #2384E8;
             line-height: 2.6rem;
         } 
    }
</style>