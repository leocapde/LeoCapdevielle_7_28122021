import Vue from 'vue'
import Vuex from 'vuex'

import PublicationServices from '../services/PublicationServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeMode: 'login',
    aboutMode: 'publication',
    userProfil: '',
    publicationList: [],
  },
  mutations: {
    SET_HOME_MODE(state, payload){
      state.homeMode = payload
    },
    SET_USER_ID_PROFIL(state, payload) {
      state.userProfil = payload
    },
    SET_PUBLICATION_LIST(state, payload){
      state.publicationList = payload
      // console.log(state.publicationList)
    }
  },
  actions: {
    setHomeMode(context, payload){
      context.commit('SET_HOME_MODE', payload);
    },
    setUserProfil(context, payload) {
      context.commit('SET_USER_ID_PROFIL', payload)
      window.scroll(top)
    },
    async setPublicationList(context) {
      const publications = await PublicationServices.getAllPublications()
      context.commit('SET_PUBLICATION_LIST', publications.data)
    },
    async setUserPublicationList(context, userId) {
      const userPublications = await PublicationServices.getAllUserPublications(userId)
      context.commit('SET_PUBLICATION_LIST', userPublications.data)
    }
  }
})
