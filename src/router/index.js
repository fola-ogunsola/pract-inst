import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Auth/Login'
import ResetPassword from '../views/Auth/ResetPassword'
import ForgotPassword from '../views/Auth/ForgotPassword'
import Account from '../views/Dashboard/Account'
import Dashboard from '../layouts/Dashboard.vue'
import Demo from '../views/Dashboard/Demo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  }, 
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: 'account',
        name: 'Account',
        component: Account
      },
      {
        path: 'demo',
        name: 'Demo',
        component: Demo
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes
})

export default router
