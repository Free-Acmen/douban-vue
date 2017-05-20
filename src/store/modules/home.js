import type from '../mutation-type'
import { hotMovie } from '../data'

const state = {
    homeData: {}
}

const actions = {
    getMoreData({ commit }, { count, start }) {
        hotMovie(count, start).then((response) => {
            commit(type.HOME_DATA, response)
        }).catch((error) => {
            commit(type.NET_STATUS, error)
        })
    }
}

const getters = {}

const mutations = {
    [type.HOME_DATA](state, homeData) {
        state.homeData = homeData
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}