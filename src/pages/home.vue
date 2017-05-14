<template>
    <div class='m-home'>
        <m-head></m-head>
        <div class='home-content padding-top' ref='loading'>
            <m-home-item v-for='item in currentData' :homeItem='item' :key='item.id'></m-home-item>
        </div>
        <m-loading v-show='loadingState' type='spiningDubbles' color='#11B91E' width='1.5'></m-loading>
        <m-foot></m-foot>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {loadMore} from '../config/utils'
    import mHead from '../components/head'
    import mHomeItem from '../components/homeItem'
    import mLoading from '../components/mLoading/mLoading'
    import mFoot from '../components/mFooter'

    export default{
        data(){
            return {
                title: '首页',
                currentData: [],
                isLoading : true,
                loadingState: true
            }
        },
        created(){
            this.setCurrentData()
        },
        mounted(){
            loadMore(this.$refs.loading, () => {
                this.handLoad()
            })
        },
        watch: {
            homeData(){
                this.setCurrentData()
                this.isLoading = true
            }
        },
        computed:{
            ...mapState({
                homeData(state){
                    return state.home.homeData
                }
            })
        }, 
        methods: {
            ...mapActions(['getMoreData']),
            handLoad(){
                const { start, count, total } = this.homeData
                if(!this.isLoading){
                    return
                }
                if((start+count) < total){
                    this.getMoreData({count, start:start+count})
                    this.isLoading = false
                }else{
                    this.loadingState = false
                }
            },
            setCurrentData(){
                this.currentData = this.currentData.concat(this.homeData.subjects)
            }
        },
        components: {mHead, mHomeItem, mLoading, mFoot}
    }
</script>

<style lang='scss' scoped>
    .m-home{
         
    }
</style>