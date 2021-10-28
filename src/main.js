import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import api from './api/api'

import "./utils/global-components";
import IToast from "./plugins/toast";

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!store.getters['auth/getToken']

  if(to.meta.requiresAuth) {
    if (isAuthenticated) {
      next()
    } else {
      next({name: 'Home'})
    }
  }
  else if (to.meta.noAuth) {
    if (isAuthenticated) {
      next({name: 'Dashboard'})
    } else {
      next()
    }
  } else {
    next()
  }
})



Vue.use(IToast);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  computed: {
    token() {
      return store.state.auth.token
    }
  },
  watch: {
    token(val) {
      this.setHeader(val)
    }
  },
  created() {
    this.setHeader(store.state.auth.token)
  },
  methods: {
    setHeader(token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}` || ''
    },
  },
  render: h => h(App)
}).$mount('#app')
