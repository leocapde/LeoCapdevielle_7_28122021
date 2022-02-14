<template>
    <div id="profil">
        <h3>{{ user.firstName }} {{ user.lastName}}</h3>
        <p>{{ user.email }}</p>
    </div>
</template>

<script>
import UserServices from '../services/UserServices'

import { mapState } from 'vuex'

export default {
    data() {
        return {
            user: []
        }
    },
    props: {
        profilId: { required: true }
    },
    watch: {
        profilId() {
            this.getUserProfil()
        }
    },
    mounted() {
        this.getUserProfil()
    },
    computed: {
        ...mapState({
            userProfil: 'userProfil'
        })
    },
    methods: {
        async getUserProfil() {
            const profilId = this.profilId
            const user = await UserServices.getOneUser(profilId)
            return this.user = user.data
        }
    }
}
</script>

<style>
#profil {
    border: 1px solid green;
    border-radius: 20px;
    margin: 10px 0;
}
</style>