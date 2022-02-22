import Vue from 'vue'
import Vuex from 'vuex'

import PublicationServices from '../services/PublicationServices'
import UserServices from '../services/UserServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeMode: 'login',
    aboutMode: 'publication',
    profilId: '',
    publicationList: [],
    userProfil: {},
    profilModification: false,
  },
  mutations: {
    SET_HOME_MODE(state, payload){
      state.homeMode = payload
    },
    SET_PROFIL_ID(state, payload) {
      state.profilId = payload
    },
    SET_PUBLICATION_LIST(state, payload){
      state.publicationList = payload
      // console.log(state.publicationList)
    },
    SET_USER_PROFIL(state, payload) {
      state.userProfil = payload
      // console.log(state.userProfil)
    },
    SET_PROFIL_MODIFICATION(state, payload){
      state.profilModification = payload;
    }
  },
  actions: {
    setHomeMode(context, payload){
      context.commit('SET_HOME_MODE', payload);
    },
    setProfilId(context, payload) {
      context.commit('SET_PROFIL_ID', payload)
      context.commit('SET_PROFIL_MODIFICATION', false)
      window.scroll(top)
    },
    async setPublicationList(context) {
      const publications = await PublicationServices.getAllPublications()
      context.commit('SET_PUBLICATION_LIST', publications.data)
    },
    async setUserPublicationList(context, userId) {
      const userPublications = await PublicationServices.getAllUserPublications(userId)
      context.commit('SET_PUBLICATION_LIST', userPublications.data)
    },
    async setUserProfil(context, profilId) {
      const profil = await UserServices.getOneUser(profilId)
      context.commit('SET_USER_PROFIL', profil.data)
    },
    setProfilModification(context, payload) {
      context.commit('SET_PROFIL_MODIFICATION', payload)
    }
  }
})
