<template>
    <div class='m-home-item'>
        <h5>{{homeItem.title}}</h5>
        <img v-lazy="reviews.images.large" alt="电影海报">
        {{reviews.summary}}
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
            }
        }),
        created(){
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
    }
</style>