import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'


import auth from './modules/auth'
import demo from './modules/demo'
import customer from './modules/customer'

import { getActivityTotal } from '../api/total'
import { errorHandler } from "@/utils/error-handler";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth'],
  key: 'instrail-admin'
})


Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    allActivityTotal: {}
  },
  mutations: {
    SET_ACTIVITY_TOTAL: (state, payload) => {
      state.allActivityTotal = payload;
    }
  },
  actions: {
    getActivityTotal: ({ commit }, body) => {
      return getActivityTotal(body)
        .then(({ data: { data } }) => {
          commit("SET_ACTIVITY_TOTAL", data);
          return data;
        })
        .catch(response => errorHandler(response));
    }
  },
  getters: {
    getActivitiesTotal: state => state.allActivityTotal
  },
  modules: {
    auth,
    demo,
    customer
  },
  plugins: [vuexLocal.plugin]
})
