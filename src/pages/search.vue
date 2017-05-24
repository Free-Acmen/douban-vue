<template>
    <div class='m-search'>
        <header>
            <span>搜索</span>
            <input type="text" v-model='searchText' placeholder='搜索感兴趣的电影、影人' @blur='searchHandle'>
        </header>
        <div class='search-container'>
            <ul class='clear'>
                <li v-for='item in searchTags' :key='item.tag'><router-link :to='`/tag/${item.tag}`' :style='`color:${item.color};font-size: ${random(7, 12)/10}rem;`'>{{item.tag}}</router-link></li>
            </ul>
        </div>
        <router-link class='search-close' to='/movie'>关闭搜索页</router-link>
        <m-foot></m-foot>
    </div>
</template>

<script>
import mFoot from '../components/mFooter'
    export default{
        data(){
            return {
                searchText: '',
                searchTags: [
                    { tag: '经典', color: 'rgb(35, 132, 232)' },
                    { tag: '冷门佳片', color: 'rgb(122, 106, 219)' },
                    { tag: '豆瓣高分', color: 'rgb(159, 120, 96)' },
                    { tag: '动作', color: 'rgb(230, 70, 126)' },
                    { tag: '喜剧', color: 'rgb(42, 184, 204)' },
                    { tag: '爱情', color: 'rgb(244, 143, 46)' },
                    { tag: '悬疑', color: 'rgb(159, 120, 96)' },
                    { tag: '恐怖', color: 'rgb(87, 116, 197)' },
                    { tag: '科幻', color: 'rgb(89, 108, 221)' },
                    { tag: '治愈', color: 'rgb(225, 100, 77)' },
                    { tag: '文艺', color: 'rgb(64, 207, 169)' },
                    { tag: '歌剧', color: 'rgb(64, 207, 169)' },
                    { tag: '成长', color: 'rgb(66, 189, 86)' },
                    { tag: '动画', color: 'rgb(230, 70, 126)' },
                    { tag: '华语', color: 'rgb(225, 100, 77)' },
                    { tag: '欧美', color: 'rgb(87, 116, 197)' },
                    { tag: '韩国', color: 'rgb(35, 132, 232)' },
                    { tag: '日本', color: 'rgb(159, 120, 96)' }
                ]
            }
        },
        methods: {
            random(min, max){
                return Math.floor(Math.random()*(max-min+1)+min)
            },
            searchHandle(){
                this.$router.push({ path: `/tag/${this.searchText}`})
            }
        },
        components: {mFoot}
    }
</script>

<style lang="scss" scoped>
    .m-search{
        header{
            padding: 0 .5rem;
            height: 2.5rem;
            line-height: 2.5rem;
            border-bottom: 1px solid #f3f3f3;
            span{
                color: #42BD56;
                font-size: .8rem;
                padding: 0 .3rem;
            }
            input{
                border: 1px solid #ccc;
                height: 1.4rem;
                width: 83%;
                padding-left: .5rem;
                outline:none;
                border-radius: .2rem;
            }
            
        }
        .search-container{
            ul{
                padding: 1rem .5rem;
            }
            li{
                float: left;
                width: 33.33%;
                text-align: center;
                height: 2.2rem;
                line-height: 2.2rem;
            }
        }
        .search-close{
            display: block;
            width: 80%;
            margin: 0 auto;
            text-align: center;
            background-color: #42BD56;
            color: #fff;
            padding: .4rem;
            border-radius: .3rem;
            font-size: .8rem;
        }
    }
</style>