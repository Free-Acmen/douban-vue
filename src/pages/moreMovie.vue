<template>
    <div class='m-more-movie'>
        <m-head></m-head>
        <div class='more-cotainer padding-top clear' ref='moreMovie'>
            <movie-item v-for='item in currentMovieList' :key='item.box' :movieDetail='item'></movie-item>
        </div>
        <m-loading v-show='loadingState' type='spiningDubbles' color='#11B91E' width='1.5'></m-loading>
        <m-foot></m-foot>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import mHead from '../components/head'
    import mLoading from '../components/mLoading/mLoading'
    import mFoot from '../components/mFooter'
    import movieItem from '../components/movieItem'
     import {loadMore} from '../config/utils'

    export default{
        data(){
            return {
                loadingState: true,
                isLoading: true,
                currentMovieList: []
            }
        },
        created(){
            console.log(this.moreData)
            this.setCurrentData()
        },
        mounted(){
            loadMore(this.$refs.moreMovie, ()=>{
                this.handMovieLoad()
            })
        },
        watch: {
            moreData(){
                this.setCurrentData()
                this.isLoading = true
            }
        },
        computed: {
            ...mapState({
                moreData(state){
                    return state.moreMovie.moreData
                }
            })
        },
        methods: {
            ...mapActions(['getMovieData']),
            handMovieLoad(){
                const {title, start, count, total } = this.moreData
                if(!this.isLoading){
                    return
                }
                if((start+count) < total){
                    this.getMovieData({title: title, count, start:start+count})
                    this.isLoading = false
                }else{
                    this.loadingState = false
                }
            },
            setCurrentData(){
                this.currentMovieList = this.currentMovieList.concat(this.moreData.subjects)
            }
        },
        components: {mHead, mFoot, mLoading, movieItem}
    }
</script>

<style lang="scss" scoped>
    .m-more-movie{
        .more-cotainer{
            padding-left: .2rem;
        }
    }
</style>