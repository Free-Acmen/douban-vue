<template>
    <div class='m-home'>
        <m-head></m-head>
        <div class='padding-top'>
            <div class='home-content clear ' v-for='item in homeData' :key='item.title'>
                <h2>
                    <span class='title'>{{item.title}}</span>
                    <router-link class='more right' to='/'>更多</router-link>
                </h2>
                <div class='swiper-container'>
                    <div class="swiper-wrapper">
                        <m-item class="swiper-slide" v-for='movieDetail in item.subjects.slice(0, 8)' :movieDetail='movieDetail' :key='movieDetail.id'></m-item> 
                    </div>
                </div>

                <div class='swiper-container'>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" >
                            <img :src="item.src" :alt="item.name">
                        </div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <!-- 如果需要滚动条 -->
                    <!-- <div class="swiper-scrollbar"></div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import mHead from '../components/head'
    import mItem from '../components/movieItem'
    // import '../plugins/swiper.min'

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
            // swiper(){
            //     const swiper = new Swiper('.swiper-container', {
            //         // direction: 'vertical',
            //         loop: true,
            //         autoplay: 3000,
            //         // 如果需要分页器
            //         pagination: '.swiper-pagination',
            //         // 如果需要前进后退按钮
            //         nextButton: '.swiper-button-next',
            //         prevButton: '.swiper-button-prev',
            //         // 如果需要滚动条
            //         // scrollbar: '.swiper-scrollbar'
            //     });
            // }
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
        }
    }
</style>