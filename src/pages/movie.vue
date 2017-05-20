<template>
    <div class='m-movie'>
        <m-head></m-head>
        <div class='padding-top'>
            <div class='movie-content clear ' v-for='item in movieData' :key='item.title'>
                <h2>
                    <span class='title'>{{item.title}}</span>
                    <router-link class='more right' :to='`/more/${item.title}`'>更多</router-link>
                </h2>
                <div class='swiper'>
                    <m-item class="item" v-for='movieDetail in item.subjects.slice(0, 9)' :movieDetail='movieDetail' :key='movieDetail.id'></m-item> 
                </div>
            </div>
        </div>
        <m-foot></m-foot>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import mHead from '../components/head'
    import mItem from '../components/movieItem'
    import mFoot from '../components/mFooter'

    export default{
        data(){
            return {
                title: '首页'
            }
        },
        components:{mHead, mItem, mFoot},
        computed: mapState({
            movieData(state){
                return state.movie.movieData
            }
        }),
        methods: {
    
        }
    }
</script>

<style lang='scss' scoped>
    .m-movie{
        .movie-content{ 
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