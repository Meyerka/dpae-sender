import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employer: "testKE"
  },
  mutations: {
    setEmployer: (state, employer) => (state.employer = employer)
  },
  actions: {
  },
  modules: {
  }
})
