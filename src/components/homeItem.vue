<template>
    <div class='m-home-item'>
        <h5>{{homeItem.title}}</h5>
        {{id}}
        {{reviews}}
    </div>
</template>
<script>
    import {ajax, currentMovie} from '../store/data'
    export default{
        data(){
            return {
                reviews: '',
                id: this.homeItem.id
            }
        },
        props:['homeItem'],
        computed: {

        },
        created(){
            this.getReviews();
            console.log(this.reviews, 1112);
        },
        methods: {
            getReviews(){
                // ajax(`/v2/movie/subject/${this.id}/reviews`).then((reviews)=>{
                //     this.reviews = reviews
                // }).catch((err) => {
                //     console.log(err)
                // })
                currentMovie(this.id).then( (reviews)=>{
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
        padding: .5rem;
    }
</style>