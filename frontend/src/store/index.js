import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeMode: 'login',
    aboutMode: 'publication'
  },
  mutations: {
    SET_HOME_MODE(state, payload){
      state.homeMode = payload;
    },
    SET_ABOUT_MODE(state, payload){
      state.aboutMode = payload;
    }
  },
  actions: {
    setHomeMode(context, payload){
      context.commit('SET_HOME_MODE', payload);
    },
    setAboutMode(context, payload){
      context.commit('SET_ABOUT_MODE', payload)
    }
  },
  modules: {
  }
})
