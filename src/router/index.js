import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/EmployeeList.vue'
import Employee from '../components/EmployeeForm.vue'
import Employer from '../components/EmployerForm.vue'
import Preview from '../components/FilePreview.vue'
import About from '../components/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee
  },
  {
    path: '/employer',
    name: 'Employer',
    component: Employer
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
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
