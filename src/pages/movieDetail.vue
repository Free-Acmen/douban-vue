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
                <img v-lazy="imgSrc" alt="电影海报">
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
            <div class='reviews' v-if='reviewsData'>
                <h6>{{movieDetailData.title}}的评论({{movieDetailData.comments_count}}条)</h6>
                <m-reviews v-for='item in reviewsData.comments' :reviewItem='item' :key = 'item.id'></m-reviews>
                <div class='page'>
                    <span :class='{able : isPrev}' @click = 'reviewsLess'>上一页</span>
                    <span :class='{able : isNext}' @click ='reviewsAdd'>下一页</span>
                </div>
            </div> 
        </section>
        <m-foot></m-foot>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex' 
    import mHead from '../components/head'
    import mStar from '../components/star'
    import mReviews from '../components/reviews'
    import mFoot from '../components/mFooter'

    export default{
        data(){
            return {
                isNext: true,
                isPrev: false,
                isGetReview: true
            }
        },
        created(){
            const {start, count} = this.reviewsData
            if(start > count){
                this.isPrev = true
                console.log(11)
            }
            console.log(this.isPrev)
        },
        watch: {
            reviewsData(){
                this.isGetReview = true
            }
        },
        computed:{
            ...mapState({
                movieDetailData(state){
                    return state.movieDetail.movieDetailData
                },
                reviewsData(state){
                    return state.movieDetail.reviewsData
                }
            }),
            average(){
                if(Object.keys(this.movieDetailData).length === 0){
                    return
                }
                return this.movieDetailData.rating.average
            },
            imgSrc(){
                if(Object.keys(this.movieDetailData).length === 0){
                    return
                }
                return this.movieDetailData.images.medium
            },
            infos() {
                if(Object.keys(this.movieDetailData).length === 0){
                    return
                }
                const { directors, countries, year, genres, casts } = this.movieDetailData
                let array = [];
                Array.prototype.push.call(array, genres.reduce((previous, current) => `${previous} / ${current}`),
                     directors.map(value => `${value.name}(导演)`).join(' / '), casts.map(value => value.name).join(' / '),
                    `${year}年(${countries.reduce((previous, current) => `${previous} / ${current}`)})上映`)
                return array.join(' / ')
            },
            celebrityItems() {
                if(Object.keys(this.movieDetailData).length === 0){
                    return
                }
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
        methods: {
            ...mapActions(['getReviews']),
            reviewsAdd(){
                if(!this.isGetReview){
                    return
                }
                this.isGetReview = false
                const {start, next_start, count, total} = this.reviewsData 
                if(next_start < total){
                    this.getReviews({movieId:this.movieDetailData.id, count:count, start:next_start})
                    this.isPrev = true
                }else{
                    this.isNext = false
                }  
            },
            reviewsLess(){
                if(!this.isGetReview){
                    return
                }
                this.isGetReview = false
                const {start, next_start, count} = this.reviewsData
                if(start >= count){
                    this.getReviews({movieId:this.movieDetailData.id, count:count, start:next_start-2*count-1})
                    this.isNext = true
                }else{
                    this.isPrev = false
                }
            }
        },
        components:{mHead, mStar, mReviews, mFoot}
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
                width: 66%;
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
                p{
                    line-height: 1rem;
                }
            }
            .movie-info img{ float: right; }
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
            .reviews{
                .page{
                    text-align: center;
                    span{
                        padding: .3rem .8rem;
                    }
                    span.able{
                        color: #2384e8;
                    }
                }
            }
        }
    }
</style>