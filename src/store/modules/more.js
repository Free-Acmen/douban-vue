import type from '../mutation-type'
import { hotMovie, commingSoon, top250, usBox, weekly, newMovies } from '../../store/data'

const request = (title, count, start) => {
    switch (title) {
        case '正在上映的电影-北京':
            return hotMovie(count, start)
            break
        case '即将上映的电影':
            return commingSoon(count, start)
            break
        case '豆瓣电影Top250':
            return top250(count, start)
            break
        case '豆瓣电影北美票房榜':
            return usBox(count, start)
            break
        case '豆瓣电影新片榜':
            return newMovies(count, start)
            break
        case '豆瓣电影本周口碑榜':
            return weekly(count, start)
            break
        default:
            return weekly(count, start)
    }
}

const state = {
    moreData: {}
}

const actions = {
    getMovieData({ commit }, { title, count, start }) {
        request(title, count, start).then((moreData) => {
            commit(type.CURRENT_SEE_MORE, moreData)
        }).catch((err) => {
            // commit(type.NET_STATUS, err)
            console.log(err)
        })
    }
}

const getters = {}

const mutations = {
    [type.CURRENT_SEE_MORE](state, moreData) {
        state.moreData = moreData
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}