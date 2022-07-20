import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
import auth from './auth'

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  },

  plugins: [new VuexPersistence().plugin]
})
