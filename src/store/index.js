import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employer: {},
    employees: [],

  },
  mutations: {

    setSiretNumber: (state, siret) => (state.employer.siretNumber = siret),
    setHealthService: (state, healthService) => (state.employer.healthService = healthService),
    setUrssafCode: (state, urssafCode) => (state.employer.urssafCode = urssafCode),
    setNafCode: (state, nafCode) => (state.employer.nafCode = nafCode),
    setName: (state, name) => (state.employer.name = name),
    setAltName: (state, altName) => (state.employer.altName = altName),
    setAddress: (state, address) => (state.employer.address = address),
    setAddress2: (state, address2) => (state.employer.address2 = address2),
    setPostCode: (state, postCode) => (state.employer.postCode = postCode),
    setCity: (state, city) => (state.employer.city = city),
    setPhone: (state, phone) => (state.employer.phone = phone),

    addEmployee: (state, emp) => (state.employees.push(emp)),


  },
  actions: {
  },
  modules: {
  }
})
