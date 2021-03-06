import Home from '../../pages/home'
import store from '../../store'
import type from '../../store/mutation-type'
import { hotMovie } from '../../store/data'

export default {
    path: '/home',
    component: Home,
    beforeEnter: function(to, before, next) {
        store.commit(type.LOADING_FLAG, true)
        hotMovie(3, 0).then(function(homeData) {
            store.commit(type.HOME_DATA, homeData)
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, '')
        }).catch((err) => {
            store.commit(type.NET_STATUS, err)
            store.commit(type.LOADING_FLAG, false)
        })
        next()
    }
}