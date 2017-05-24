import Tag from '../../pages/tag'
import store from '../../store'
import type from '../../store/mutation-type'
import { getTagData } from '../../store/data'

export default {
    path: '/tag/:searchText',
    component: Tag,
    beforeEnter: (to, from, next) => {
        store.commit(type.LOADING_FLAG, true)
        const searchText = to.params.searchText
        getTagData(searchText, 50, 0).then((tagData) => {
            store.commit(type.CURRENT_TAG, tagData)
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, '')
        }).catch((err) => {
            store.commit(type.NET_STATUS, err)
            store.commit(type.LOADING_FLAG, false)
        })

        next()
    }
}