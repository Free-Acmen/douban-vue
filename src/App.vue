<template>
  <div id="m-app">
    <transition name='router-fade' mode='out-in'>
      <m-error v-if='netStatus' :netStatus='netStatus'></m-error>
      <m-loading v-else-if='!netStatus && loadingFlag'></m-loading>
      <router-view v-else></router-view>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import mError from './components/error'
import mLoading from './components/loading'

export default {
  data(){
    return {

    }
  },
  components: {
    mError, 
    mLoading
  },
  computed: mapState({
    loadingFlag(state){
      return state.loadingFlag
    },
    netStatus(state){
      return state.netStatus
    }
  })  
}
</script>

<style lang='scss'>
    @import './assets/style/reset';
   .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
</style>
