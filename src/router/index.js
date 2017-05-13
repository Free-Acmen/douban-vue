import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from './routes/home'
import movie from './routes/movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',  
    },
    home,
    movie
  ],
  mode: 'history',
  activeClass: 'active'
})
