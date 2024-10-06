import { createStore } from 'vuex'
import title from './pageTitle'
import auth from './auth'
import device from './device'
import nav from './nav'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    title,
    auth,
    device,
    nav,
  }
})
