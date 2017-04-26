<template>
    <div class='m-home'>
        {{homeData}}
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default{
        data(){
            return {
                title: '首页'
            }
        },
        components:{},
        computed: mapState({
            homeData(state){
                return state.home.homeData
            }
        }),
        methods: {
            
        }
    }
</script>

<style lang='scss' scoped>

</style>