<template>
    <div class='m-footer'>
        <div class='info'>
            <img src='../assets/image/doubanLogo.png' alt="豆瓣">
            <div class='info-content'>
                <strong>豆瓣</strong>
                <p>我们的精神角落</p>
            </div>
        </div>
        <a class='link-github' href="https://github.com/Free-Acmen/douban-vue">github上去查看源码</a>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang='scss' scoped>
    .m-footer{
        width:100%;
        padding: 1rem 0;
        text-align:center;
        .info{
            display: inline-block;
            margin: 0 auto .5rem;
            text-align: left;
            img{
                width: 2.4rem;
                float: left;
            }
            .info-content{
                padding-left: .7rem;
                color: #111111;
                overflow: hidden;
                strong{
                    font-size: 1.2rem
                }                
                p{
                    white-space: pre;
                    font-size: .7rem;
                }
            }
        }
        .link-github{
            display: block;
            color: #42bd56;
            font-size: .6rem;
        }
    }
</style>