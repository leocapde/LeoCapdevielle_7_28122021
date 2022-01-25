import Vue from 'vue'

export default {
    login(succes, error) {
        Vue.http.get('user')
        .then(res => { succes(res.data) })
    }
}