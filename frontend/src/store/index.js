import Vue from 'vue'
import Vuex from 'vuex'

import moment from 'moment'

import PublicationServices from '../services/PublicationServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeMode: 'login',
    aboutMode: 'publication',
    userProfil: '',
    publicationList: [],
    formatedDate: '',
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
    },
    FORMATE_DATE(state, payload) {
      state.formatedDate = moment(payload).locale('fr').calendar()
      // console.log(state.formatedDate)
    }
  },
  actions: {
    setHomeMode(context, payload){
      context.commit('SET_HOME_MODE', payload);
    },
    setUserProfil(context, payload) {
      context.commit('SET_USER_ID_PROFIL', payload)
    },
    async setPublicationList(context) {
      const publications = await PublicationServices.getAllPublications()
      context.commit('SET_PUBLICATION_LIST', publications.data)
    },
    async setUserPublicationList(context, userId) {
      const userPublications = await PublicationServices.getAllUserPublications(userId)
      context.commit('SET_PUBLICATION_LIST', userPublications.data)
    },
    formateDate(context, payload) {
      context.commit('FORMATE_DATE', payload)
    }
  }
})
