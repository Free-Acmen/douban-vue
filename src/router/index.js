import Vue from 'vue'
import Router from 'vue-router'
import home from './routes/home'
import movie from './routes/movie'
import movieDetail from './routes/movieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',  
    },
    home,
    movie,
    movieDetail
  ],
  mode: 'history',
  activeClass: 'active'
})
