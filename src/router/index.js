import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home'
import service from '../page/service'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/service',
      component: service
    }
  ]
})
