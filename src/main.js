// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
import './config/fontsize'

// import './plugins/swiper.min'
// Object.definePrototype(Vue.prototype, '$swiper', { value: Swiper})

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
