import Vue from 'vue'
import Vuex from 'vuex'

import PublicationServices from '../services/PublicationServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeMode: 'login',
    aboutMode: 'publication',
    publicationList: [],
  },
  mutations: {
    SET_HOME_MODE(state, payload){
      state.homeMode = payload;
    },
    SET_ABOUT_MODE(state, payload){
      state.aboutMode = payload;
    },
    SET_PUBLICATION_LIST(state, payload){
      state.publicationList = payload;
    },
    FORMATE_PUBLICATION_LIST(){
      // Ici pour formater l'userId et le createdAt
      // Ajouter les éléments firstName, lastName, date, heures
      // Ceci sans créer également la liste des utilisateurs et de la recroisser avec celle des publications dans les components
      
    }
  },
  actions: {
    setHomeMode(context, payload){
      context.commit('SET_HOME_MODE', payload);
    },
    setAboutMode(context, payload){
      context.commit('SET_ABOUT_MODE', payload)
    },
    async setPublicationList(context) {
      const publications = await PublicationServices.getAllPublications()
      context.commit('SET_PUBLICATION_LIST', publications.data)
    }
  }
})
