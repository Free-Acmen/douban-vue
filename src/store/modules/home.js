import type from '../mutation-type'

const state = {
    homeData: {}
}

const action = {}

const getters = {}

const mutations = {
    [type.HOME_DATA](state, homeData){
        state.homeData = homeData
    }
}

export default {
    state,
    action,
    getters,
    mutations
}