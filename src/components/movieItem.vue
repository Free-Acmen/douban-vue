<template>
    <router-link :to='`/moviedetail/${detail.id}`'>
        <dl class='movie-item left'>
            <dt class='movie-img'>
                <img v-lazy="detail.images.large" :alt="detail.title">
            </dt>
            <dd>
                <h6 class='movie-title ellipsis'>{{detail.title}}</h6>
            </dd>
            <dd>
                <m-star :average='average' :length='0.7'></m-star>
            </dd>
        </dl>
    </router-link>
</template>

<script>
import mStar from './star'
export default{
    data(){
        return{
            detail:(this.movieDetail.subject ? this.movieDetail.subject : this.movieDetail )
        }
    },
    props:['movieDetail'],
    components:{
        mStar
    },
    computed:{
        average(){
            return this.detail.rating.average
        }
    }
}
</script>

<style lang='scss' scoped>
    .movie-item{
        width: 5.2rem;
        padding: .3rem .25rem;
        .movie-img{
            height: 6.8rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .movie-title{
            padding: .2rem 0;
            text-align:center;
        }
    }
</style>