import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './initialState';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    incrementStep ({form}) {
      form.currentProgress.step++
    },
    decrementStep ({form}) {
      form.currentProgress.step--
    },
    chooseStep ({form}, {step}) {
      form.currentProgress.step = step
    }
  },
  actions: {
    nextStep ({commit}) {
      commit('incrementStep')
    },
    backStep ({commit}) {
      commit('decrementStep')
    },
    updateStep ({commit}, step) {
      commit('chooseStep', step)
    }
  }
})
