import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import jef from '../views/jef.vue'
import akin from '../views/akin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'jef',
    component: jef 
  },
  {
    path: '/manage',
    name: 'akin',
    component: akin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
