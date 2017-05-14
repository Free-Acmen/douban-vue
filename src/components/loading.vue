<template>
    <div class='m-loading'>
        <loading type='spiningDubbles' color='#11B91E' width='8'></loading>
        <img src="../assets/image/doubanLogo.png" alt="logo">
        <h3>豆瓣，我们的精神角落...</h3>
    </div>
</template>

<script>
import loading from './mLoading/mLoading'
export default{
    components:{loading}
}
</script>
<style scoped lang='scss'>
    .m-loading{
        padding: 5rem 0;
        text-align:center;
        img{
            position: relative;
            width: 3.5rem;
            top: -6.2rem;
        }
        h3{
            margin-top: -4rem;
            padding: 1rem .3rem;
        }

    }
</style>