import Vue from 'vue'
import Vuex from 'vuex'
import type from './mutation-type'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        netStaus: '',
        loadingFlag : true
    },
    actions:{},
    mutations: {
        [type.LOADING_FLAG](state,loadingFlag){
            state.loadingFlag = loadingFlag
        },
        [type.NET_STATUS](state, netStatus){
            states = netStatus
        }
    },
    modules: {
        home
    }
})

export default store