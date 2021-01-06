import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartShow: false
  },
  mutations: {
    showCart(state, payload){
      state.cartShow = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
