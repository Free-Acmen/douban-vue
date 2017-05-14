import type from '../mutation-type'

const state = {
    movieData: {}
}

const actions = {}

const getters = {}

const mutations = {
    [type.MOVIE_DATA](state, movieData){
        state.movieData = movieData
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}