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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')