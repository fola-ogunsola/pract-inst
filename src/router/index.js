import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Auth/Login'
import ResetPassword from '../views/Auth/ResetPassword'
import ForgotPassword from '../views/Auth/ForgotPassword'
import Account from '../views/Dashboard/Account'
import Dashboard from '../layouts/Dashboard.vue'
import Demo from '../views/Dashboard/Demo'
import DashboardHome from '../views/Dashboard/Home'
import SingleDemo from '../views/Dashboard/SingleDemo'
import Customers  from '../views/Dashboard/Customers'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: '404',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      noAuth: true
    }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: {
      noAuth: true
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      noAuth: true
    }
  }, 
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: DashboardHome,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'account',
        name: 'Account',
        component: Account,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'demo',
        name: 'Demo',
        component: Demo,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'demo/:id',
        name: 'SingleDemo',
        component: SingleDemo,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'customers',
        name: 'Customers',
        component: Customers,
        meta: {
          requiresAuth: true
        }
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
