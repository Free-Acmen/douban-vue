import type from '../mutation-type'

const state = {
    tagData: {}
}

const getters = {}
const actions = {}

const mutations = {
    [type.CURRENT_TAG](state, tagData) {
        state.tagData = tagData
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}