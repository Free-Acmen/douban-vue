<template>
    <div class='m-home-item'>
        <h5 class='title'>
            {{homeItem.title}}
            <span class='right'>{{year}}年上映</span>
        </h5>
        <div class='content' v-if='reviews'>
            <img v-lazy="imageSrc" alt="电影海报">
            {{summary}}
        </div>
        <m-loading v-else type='spiningDubbles' color='#11B91E'></m-loading>
    </div>
</template>
<script>
    import {mapState} from 'vuex' 
    import {currentMovie} from '../store/data'
    import mLoading from './mLoading/mLoading'

    export default{
        data(){
            return {
                reviews: '',
                summary: '',
                year: '',
                id: this.homeItem.id
            }
        },
        props: ['homeItem'],
        computed: mapState({
            reviews(state){
                return state.home.reviews
            },
            imageSrc(){
                return (this.reviews && this.reviews.images.large)
            }
        }),
        created(){
            this.getReviews()
        },
        methods: {
            getReviews(){
                currentMovie(this.id).then( (reviews)=>{
                    this.reviews = reviews
                    this.summary = reviews.summary
                    this.year = reviews.year
                    // console.log(reviews)
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        components:{mLoading}
    }
</script>
<style lang='scss' scoped>
    .m-home-item{
        padding: 0 .5rem;
        color: #000;
        .title{
            line-height: 1.8rem;
            color: #2384E8;
            font-size: .85rem;
            span{
                font-size: .7rem;
            }
        }
        .content{
            line-height: 1.1rem;
            font-size: .7rem;
            padding-bottom: .4rem;
            border-bottom:1px solid #ccc;
            min-height: 11rem;
            img{
                float:right;
                width: 7.5rem;
                height: 10.2rem;
                padding-top: .2rem;
                padding-left: .1rem;
            }
        }
    }
</style>