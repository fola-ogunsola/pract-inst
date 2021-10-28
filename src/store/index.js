import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'


import auth from './modules/auth'
import demo from './modules/demo'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth'],
  key: 'instrail-admin'
})


Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    demo
  },
  plugins: [vuexLocal.plugin]
})
