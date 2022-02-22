import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import moment from 'moment'

Vue.filter('formatDate', (date) => {
  if (date) {
    return moment(date).locale('fr').calendar()
  }
})

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEllipsis)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')