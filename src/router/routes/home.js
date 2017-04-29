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
            hotMovie(8, 0), 
            commingSoon(8, 0),
            top250(8, 0),
            usBox(8, 0)
        ]).then(function(homeData){
            console.log(homeData)
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