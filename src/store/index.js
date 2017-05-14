import Vue from 'vue'
import Vuex from 'vuex'
import type from './mutation-type'
import home from './modules/home'
import movie from './modules/movie'
import movieDetail from './modules/movieDetail'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        netStatus: '',
        loadingFlag : true
    },
    actions:{},
    mutations: {
        [type.LOADING_FLAG](state, loadingFlag){
            state.loadingFlag = loadingFlag
        },
        [type.NET_STATUS](state, netStatus){
            state.netStatus = netStatus
        }
    },
    modules: {
        home,
        movie,
        movieDetail
    }
})

export default store