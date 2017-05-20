import moreMovie from '../../pages/moreMovie'
import store from '../../store'
import type from '../../store/mutation-type'
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

export default {
    path: '/more/:moreTitle',
    component: moreMovie,
    beforeEnter: (to, before, next) => {
        const moreTitle = to.params.moreTitle
        store.commit(type.LOADING_FLAG, true)
        request(moreTitle, 12, 0).then((moreData) => {
            store.commit(type.CURRENT_SEE_MORE, moreData)
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, '')
        }).catch((err) => {
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, err)
        })
        next()
    }
}