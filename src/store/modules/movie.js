import type from '../mutation-type'

const state = {
    movieData: {}
}

const action = {}

const getters = {}

const mutations = {
    [type.MOVIE_DATA](state, movieData){
        state.movieData = movieData
    }
}

export default {
    state,
    action,
    getters,
    mutations
}