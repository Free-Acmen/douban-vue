import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from './routes/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    home
  ],
  mode: 'hash',
  activeClass: 'active'
})
