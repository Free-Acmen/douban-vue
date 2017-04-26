import Home from '../../pages/home'


export default {
    path:'/home',
    component:Home,
    beforeEnter:function(to, before, next){

        next()
    }
}