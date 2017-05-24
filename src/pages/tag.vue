<template>
    <div class='m-tag'>
        <m-head></m-head>
        <div class='padding-top'>
            <tag-item v-for = 'item in tagData.subjects' :tagItem = 'item' :key='item.id'></tag-item>
        </div>
        <m-foot></m-foot>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import mHead from '../components/head'
    import mFoot from '../components/mFooter'
    import tagItem from '../components/tagItem'

    export default{
        data(){
            return {

            }
        },
        computed:mapState({
            tagData(state){
                return state.tag.tagData
            }
        }),
        components:{mHead, mFoot, tagItem}

    }
</script>

<style scoped lang='scss'>
    .m-tag{

    }
</style>