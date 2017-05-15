import type from '../mutation-type'
import {reviews} from '../data'

const state = {
    movieDetailData: {},
    reviewsData: {}
}
const actions = {
    getReviews({commit}, {movieId, count, start}){
        reviews(movieId, count, start).then((reviewsData) => {
            commit(type.REVIEWS, reviewsData)
        }).catch((err) => {
            console.log(err)
        })
    }
} 
const getters = {}
const mutations = {
    [type.CURRENT_MOVIE](state, movieDetailData){
        state.movieDetailData = movieDetailData
    },
    [type.REVIEWS](state, reviewsData){
        state.reviewsData = reviewsData
    }
}

export default{
    state,
    actions,
    getters,
    mutations
}