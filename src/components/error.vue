<template>
    <div class='m-error'>
        <m-head></m-head>
        <div class='padding-top'>
            <img src="../assets/image/404.png" alt='404'>
            <h1>{{netStatus}}404</h1>
            <router-link class='link-home' to='/'>返回首页</router-link>
        </div>
    </div>
</template>

<script>
import mHead from './head'
export default{
    props:['netStatus'],
    components:{
        mHead
    }
}
</script>

<style lang='scss' scoped>
    .m-error{
        img{
            padding:1rem 0;
        }
        h1{
            color:blue;
            text-align:center;
        }
        .link-home{
            display: block;
            text-align: center;
            font-size: .6rem;
        }
    }
</style>