import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeMode: 'login'
  },
  mutations: {
    SET_HOME_MODE(state, payload){
      state.homeMode = payload;
    }
  },
  actions: {
    setHomeMode(context, payload){
      context.commit('SET_HOME_MODE', payload);
    }
  },
  modules: {
  }
})
