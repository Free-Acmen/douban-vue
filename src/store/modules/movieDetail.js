import type from '../mutation-type'

const state = {
    movieDetailData: {}
}
const actions = {} 
const getters = {}
const mutations = {
    [type.CURRENT_MOVIE](state, movieDetailData){
        state.movieDetailData = movieDetailData
    }
}

export default{
    state,
    actions,
    getters,
    mutations
}