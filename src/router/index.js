import Vue from 'vue'
import Router from 'vue-router'
import home from './routes/home'
import movie from './routes/movie'
import movieDetail from './routes/movieDetail'
import moreMovie from './routes/more'
import search from './routes/search'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        home,
        movie,
        movieDetail,
        moreMovie,
        search
    ],
    scrollBehavior(to, from, savedPosition) {
        // return 期望新页面滚动到的位置
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    mode: 'history',
    activeClass: 'active'
})