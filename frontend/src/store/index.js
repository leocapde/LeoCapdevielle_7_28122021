import Vue from 'vue'
import Vuex from 'vuex'
import CommentaryServices from '../services/CommentaryServices'

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
    changeKey: 0,
    publicationModification: false,
    publication: {},
    commentaryModification: false,
    commentary: {}
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
    },
    SET_USER_PROFIL(state, payload) {
      state.userProfil = payload
    },
    SET_PROFIL_MODIFICATION(state, payload){
      state.profilModification = payload;
    },
    INCREMENT_CHANGE_KEY(state){
      state.changeKey++
    },
    SET_PUBLICATION_MODIFICATION(state, payload){
      state.publicationModification = payload;
    },
    SET_PUBLICATION(state, payload) {
      state.publication = payload
    },
    SET_COMMENTARY_MODIFICATION(state, payload){
      state.commentaryModification = payload;
    },
    SET_COMMENTARY(state, payload) {
      state.commentary = payload
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
    },
    incrementChangeKey(context) {
      context.commit('INCREMENT_CHANGE_KEY')
    },
    setPublicationModification(context, payload) {
      context.commit('SET_PUBLICATION_MODIFICATION', payload)
    },
    async setOnePublication(context, publicationId) {
      const publication = await PublicationServices.getOnePublication(publicationId)
      context.commit('SET_PUBLICATION', publication.data.publication)
    },
    setCommentaryModification(context, payload) {
      context.commit('SET_COMMENTARY_MODIFICATION', payload)
    },
    async setOneCommentary(context, commentaryId) {
      const commentary = await CommentaryServices.getOneCommentary(commentaryId)
      context.commit('SET_COMMENTARY', commentary.data)
    }
  }
})
