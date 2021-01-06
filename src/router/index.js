import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Meny from '../views/Meny.vue'
import Profile from '../views/Profile.vue'
import Status from '../views/Status.vue'

//Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/meny',
    name: 'Meny',
    component: Meny
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
