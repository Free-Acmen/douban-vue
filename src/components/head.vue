<template>
    <div class="m-head">
        <router-link class='title' to='/'>豆瓣</router-link>
        <div class='nav right clear'>
            <router-link class='movie' to='/'>电影</router-link>
            <router-link class='book' to='/'>图书</router-link>
            <router-link class='broadcast' to='/'>广播</router-link>
            <router-link class='group' to='/'>小组</router-link>
            <router-link class='search' to='/'>
                <img src='../assets/image/search.png' alt='搜索'>
            </router-link>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            
        }
    }
}
</script>

<style lang='scss' scoped>
    .m-head{
        height: 2.5rem;
        line-height:2.5rem;
        padding: 0 .5rem; 
        border: 1px solid #ccc;
        .title{
            color: #11B91E;
            font-size: 1.2rem;
            font-weight: bold;
        }
        .nav{
            font-size: .7rem;
            a{  
                display:inline-block;
                padding-left: .5rem;
                width: 2rem;
            }
            .movie{color: #2384E8;}
            .book{color: #9F7860;}
            .broadcast{color: #E4A813;}
            .group{color: #2AB8CC;}
            .search{
                img{
                    vertical-align:middle;
                }
            }
        }
    }
</style>