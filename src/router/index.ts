import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/test/Home.vue'
import AboutVIew from  '../views/AboutView.vue'
import Students from '../components/test/Students.vue'
import Employees from '../components/test/Employees.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',      
      component: AboutVIew
    },
    {
      path: '/students',
      name: 'about',      
      component: Students
    },
    {
      path: '/employees',
      name: 'about',      
      component: Employees
    }
  ]
})

export default router
