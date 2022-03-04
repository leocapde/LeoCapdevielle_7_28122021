import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Composant pour renommer la page

import TitlePage from './components/TitlePage.vue'
Vue.component('title-page', TitlePage)

// Filtre pour formatter la date

import moment from 'moment'
Vue.filter('formatDate', (date) => {
  if (date) {
    return moment(date).locale('fr').calendar()
  }
})

// Composant pour pouvoir utiliser les icons FontAwesomme

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsis, faShield, faHouse, faUser, faPowerOff, faCamera, faTrashCan, faPaperPlane, faFlag, faPenToSquare, faUserPen, faBan, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEllipsis, faShield, faHouse, faUser, faPowerOff, faCamera, faTrashCan, faPaperPlane, faFlag, faPenToSquare, faUserPen, faBan, faCircleCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')