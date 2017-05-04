<template>
    <div class='m-home'>
        <m-head></m-head>
        <div class='padding-top'>
            <div class='home-content clear ' v-for='item in homeData' :key='item.title'>
                <h2>
                    <span class='title'>{{item.title}}</span>
                    <router-link class='more right' to='/'>更多</router-link>
                </h2>
                <div class='swiper'>
                    <m-item class="item" v-for='movieDetail in item.subjects.slice(0, 9)' :movieDetail='movieDetail' :key='movieDetail.id'></m-item> 
                </div>
            </div>
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
    .m-home{
        .home-content{ 
           h2{
               font-size: .7rem;
               padding: .4rem .5rem;
               .title{
                   display:inline-block;
                   width:60%;
                   font-weight:bold;
               }
               .more{
                   color:#42BD56;
               }
           }
           .swiper{
                padding: .4rem .25rem;
                overflow-x: auto;
                white-space: nowrap;
                .item{
                    display: inline-block;
                    &:last-child{
                        dl{
                            padding-right:.5rem;
                        }
                    }
                }
           }
        }
    }
</style>