import type from '../mutation-type'

const state = {
    homeData: {},
    reviews: {}
}

const action = {}

const getters = {}

const mutations = {
    [type.HOME_DATA](state, homeData){
        state.homeData = homeData
    },
    reviews(state, reviews){
        state.reviews = reviews
    }
}

export default {
    state,
    action,
    getters,
    mutations
}