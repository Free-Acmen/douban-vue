<template>
    <div class='m-tag-item clear'>
        <router-link :to='`/moviedetail/${tagItem.id}`'>
            <div class='left tag-info'>
                <h3>{{tagItem.title}}</h3>
                <m-star class='star' :average='average' :length='0.7'></m-star>
                <p> {{text}}</p>
            </div>
            <img class='right' v-lazy="tagItem.images.medium" alt="tagItem.title">
        </router-link>
    </div> 
</template>

<script>
    import mStar from './star'
    export default{
        data(){
            return {

            }
        },
        props: ["tagItem"],
        computed: {
            average(){
                return this.tagItem.rating.average
            },
            text(){
                const {directors, durations, genres, casts, year, pubdates} = this.tagItem
                let array = [];
                Array.prototype.push.call(array, genres.reduce((previous, current) => `${previous} / ${current}`),
                     directors.map(value => `${value.name}(导演)`).join(' / '), casts.map(value => value.name).join(' / '),
                    `${pubdates}上映`)

                return array.join('/')
            }
        },
        components: {mStar}
    }
</script>

<style lang="scss" scoped>
    .m-tag-item{
        padding: .5rem; 
        border-bottom: 1px dotted #ccc;
        .tag-info{
            width:65%;
        }
        h3{
            font-size: .9rem;
            padding-bottom: .3rem;
            color: #2384E8;
        }
        .star{
            display: inline-block;
        }
        p{
            padding-top: .3rem;
            font-size: .7rem;
        }
    }
</style>