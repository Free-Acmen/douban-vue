<template>
    <router-link to='/'>
        <dl class='movie-item'>
            <dt>
                <img v-lazy="detail.images.large" :alt="detail.title">
            </dt>
            <dd>
                <h3>{{detail.title}}</h3>
            </dd>
        </dl>
    </router-link>
</template>

<script>
    export default{
        data(){
            return{
                detail:(this.movieDetail.subject ? this.movieDetail.subject : this.movieDetail )
            }
        },
        props:['movieDetail']
    }
</script>

<style lang='scss' scoped>

</style>