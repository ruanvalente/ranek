import Vue from 'vue'
import Vuex from 'vuex'

import { API } from '@/services/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasLogin: false,
    user: {
      id: '',
      name: '',
      email: '',
      password: '',
      zipCode: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: ''
    }
  },
  mutations: {
    HAS_LOGIN (state, payload) {
      state.hasLogin = payload
    },

    SET_USER (state, payload) {
      state.user = Object.assign({}, payload)
    }
  },
  actions: {
    async getUser (context, payload) {
      try {
        const response = await API.get(`/users/${payload}`)
        const { data } = await response
        context.commit('SET_USER', data)
        context.commit('HAS_LOGIN', true)
      } catch (error) {
        console.error(error.messager)
      }
    }
  },
  modules: {
  }
})
