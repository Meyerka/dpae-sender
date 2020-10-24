import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/InputForm.vue'
import Employer from '../components/EmployerForm.vue'
import About from '../components/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employer',
    name: 'Employer',
    component: Employer
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
