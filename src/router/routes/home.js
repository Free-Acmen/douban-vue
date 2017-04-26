import Home from '../../pages/home'
import store from '../../store'
import type from '../../store/mutation-type'
import {hotMovie, commingSoon, top250, usBox} from '../../store/data'


export default {
    path:'/home',
    component:Home,
    beforeEnter:function(to, before, next){

        Promise.all([hotMovie(8, 0), commingSoon(8, 0), top250(8, 0), usBox(8, 0)]).then(function(homeData){
            store.commit(type.HOME_DATA, homeData)
        })
        next()
    }
}