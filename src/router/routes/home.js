import Home from '../../pages/home'
import store from '../../store'
import type from '../../store/mutation-type'
import {hotMovie, commingSoon, top250, usBox} from '../../store/data'

export default {
    path:'/home',
    component:Home,
    beforeEnter:function(to, before, next){
        if(Object.keys(store.state.home.homeData).length !== 0){
            store.commit(type.LOADING_FLAG, false)
            next()
            return
        }
        store.commit(type.LOADING_FLAG, true)
        Promise.all([
            hotMovie(9, 0), 
            commingSoon(9, 0),
            top250(9, 0),
            usBox(9, 0)
        ]).then(function(homeData){
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