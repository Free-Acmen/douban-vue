<template>
    <div class='m-error'>
        <img src="../assets/image/404.png" alt='404'>
        <h1>{{netStatus}}404</h1>
        <router-link to='/'>返回首页</router-link>
    </div>
</template>

<script>
    export default{
        props:['netStatus']
    }
</script>

<style lang='scss' scoped>
    .m-error{
        h1{
            color:blue;
            text-align:center;
        }
    }
</style>