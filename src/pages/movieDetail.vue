<template>
    <div class='m-movie-detail'>
        <m-head></m-head>
        <section class='padding-top container'>
            <div class='movie-info clear'>
                <h4 class='title'>{{movieDetailData.title}}</h4>
                <div class='info-content'>
                    <div class='info-average clear'>
                        <m-star class='star' :average='average' :length='0.7'></m-star>
                        <span class='review'>{{movieDetailData.ratings_count}}人评论</span>
                    </div>
                    <p>{{infos}}</p>	    
                </div>
                <img v-lazy="movieDetailData.images.medium" alt="电影海报">
            </div>
            <div class='plot'>
                <h6>{{movieDetailData.title}}的剧情简介</h6>
                <p>{{movieDetailData.summary}}</p>
            </div> 
            <div class='more'>
                <h6>查看更多豆瓣高分电影电视剧</h6>
                <router-link to='/' v-for="item in movieDetailData.genres" class="tagItem" :key="item">
                {{ item }}
                </router-link>
            </div>
            <div class='shadowman'>
                <h6>影人</h6>
                <div class='content'>
                    <router-link to='/' v-for="item in celebrityItems" :key="item.id">
                        <dl class="celebrityItem">
                            <dt><img v-lazy="item.avatars.large" alt="导演照片"></dt>
                            <dd>
                                <h3 class="ellipsis">{{ item.name }}</h3>
                                <span v-if="item.isDirector">导演</span>
                            </dd>
                        </dl>
                    </router-link>
                </div>
            </div> 
        </section>
        <m-foot></m-foot>
    </div>
</template>

<script>
    import {mapState} from 'vuex' 
    import mHead from '../components/head'
    import mStar from '../components/star'
    import mFoot from '../components/mFooter'

    export default{
        data(){
            return {

            }
        },
        created(){
            console.log(this.movieDetailData)
        },
        computed:{
            ...mapState({
                movieDetailData(state){
                    return state.movieDetail.movieDetailData
                }
            }),
            average(){
                return this.movieDetailData.rating.average
            },
            infos() {
                const { directors, countries, year, genres, casts } = this.movieDetailData
                let array = [];
                Array.prototype.push.call(array, genres.reduce((previous, current) => `${previous} / ${current}`),
                     directors.map(value => `${value.name}(导演)`).join(' / '), casts.map(value => value.name).join(' / '),
                    `${year}年(${countries.reduce((previous, current) => `${previous} / ${current}`)})上映`)
                return array.join(' / ')
            },
            celebrityItems() {
                const { directors, casts } = this.movieDetailData
                directors.forEach((value) => {
                    value.isDirector = true
                })
                casts.forEach((value) => {
                    value.isDirector = false
                })
                return Array.prototype.concat.call(directors, casts)
            }
        },
        components:{mHead, mStar, mFoot}
    }
</script>

<style lang='scss' scoped>
    .m-movie-detail{
        .container{
            font-size: .7rem;
            padding-left: .5rem;
            padding-right: .5rem;
            .title{
                padding: .5rem 0;
                font-weight: 600;
            }
            .info-content{
                float: left;
                width: 70%;
                min-height: 6rem;
                .info-average{
                    padding-bottom: .3rem;
                    font-size: .6rem;
                    .star{
                        float: left;
                    }
                    .review{
                        margin-right: .7rem;
                        float: right;
                        color: #C4C4C4;
                    }
                }
                img{
                    float: right;
                }
                p{
                    line-height: 1rem;
                    padding-right: .3rem;
                }
            }
            h6{
                padding: .5rem 0;
                font-size: .7rem;
                font-weight: 600;
            }
            .plot{
                p{
                     line-height: 1rem;
                     text-indent: 1.5rem;
                }
            }
            .more{
                a{ padding: .3rem .5rem; }
            }
            .shadowman{
                .content{
                    overflow-x: auto;
                    white-space: nowrap;
                    a{
                        display: inline-block;
                        padding: 0 .25rem;
                        &.last-child{
                            margin-right: .25rem;
                        }
                        .celebrityItem{
                            width: 4.5rem;
                            height: 8rem;
                            display: inline-block;
                            text-align: center;
                            dt{
                                height: 6rem;
                                img{
                                    width: 100%;
                                    height: 100%;
                                } 
                            }
                            dd{
                                font-size: .6rem;
                                line-height: 1rem;
                                position: relative;
                                span{
                                    position:absolute;
                                    bottom: -.9rem;
                                    left: 50%;
                                    margin-left: -.8rem;
                                }
                            } 
                        }
                    }
                }
            }
        }
    }
</style>