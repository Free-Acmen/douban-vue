<template>
  <div id="m-app">
    <transition name='router-fade' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import type from './store/mutation-type'
export default {
  data(){
    return {
    }
  },
  component:{},
  computed:mapState({
    
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
