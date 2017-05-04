<template>
    <div class='m-home-item'>
        <h5>{{homeItem.title}}</h5>
        {{reviews.summary}}
    </div>
</template>
<script>
    import {mapState} from 'vuex' 
    import store from '../store'
    import {currentMovie} from '../store/data'
    export default{
        data(){
            return {
                id: this.homeItem.id
            }
        },
        props:['homeItem'],
        computed: mapState({
            reviews(state){
                return state.home.reviews
            }
        }),
        created(){
            this.getReviews();
        },
        methods: {
            getReviews(){
                if(Object.keys(store.state.home.reviews).length !== 0){
                    return
                }
                currentMovie(this.id).then( (reviews)=>{
                    store.commit('reviews', reviews)
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