<template>
    <div class='m-home-item'>
        <h5 class='title'>
            {{homeItem.title}}
            <span class='right'>{{reviews.year}}年上映</span>
        </h5>
        <div class='content'>
            <img v-lazy="imageSrc" alt="电影海报">
            {{reviews.summary}}
        </div>
        
    </div>
</template>
<script>
    import {mapState} from 'vuex' 
    import {currentMovie} from '../store/data'
    export default{
        data(){
            return {
                reviews: '',
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
        beforeCreate(){
            this.getReviews()
        },
        methods: {
            getReviews(){
                currentMovie(this.id).then( (reviews)=>{
                    this.reviews = reviews
                    console.log(reviews)
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
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
        }
        .content{
            line-height: 1.1rem;
            font-size: .7rem;
            padding-bottom: .4rem;
            border-bottom:1px solid #ccc;
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