<template>
    <div class='m-home'>
        <m-head></m-head>
        <div v-for='item in homeData' :key='item.body.title'>
            <h2>
                <span>{{item.body.title}}</span>
                <router-link class='right' to='/'>更多</router-link>
            </h2>
            <m-item v-for='movieDetail in item.body.subjects.slice(0, 8)' :movieDetail='movieDetail' :key='movieDetail.id'></m-item>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import mHead from '../components/head'
    import mItem from '../components/movieItem'
    export default{
        data(){
            return {
                title: '首页'
            }
        },
        created(){
            console.log(this.homeData)
        },
        components:{mHead, mItem},
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

</style>