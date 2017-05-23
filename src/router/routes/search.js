import Search from '../../pages/search'
import store from '../../store'
import type from '../../store/mutation-type'

export default {
    path: '/search',
    component: Search,
    beforeEnter: function(to, before, next) {
        store.commit(type.LOADING_FLAG, false)
        next()
    }
}