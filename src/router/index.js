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
import WebsiteLayout from '../layouts/Website.vue'
import ContactPage from '../views/Contact'
import Privacy from '../views/Policy.vue'
import Terms from '../views/Terms.vue'
import FAQ from '../views/FAQ.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: WebsiteLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'contact',
        name: 'Contact',
        component: ContactPage
      },
      {
        path: 'privacy',
        name: 'Privacy',
        component: Privacy
      },
      {
        path: 'terms',
        name: 'Terms',
        component: Terms
      },
      {
        path: 'faq',
        name: 'FAQ',
        component: FAQ
      }
    ]
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
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0, behavior: 'smooth' };
  }

})

export default router
