<template>
    <div id="profil">
        <h3>{{ user.firstName }} {{ user.lastName}}</h3>
        <p>{{ user.email }}</p>
    </div>
</template>

<script>
import UserServices from '../services/UserServices'

export default {
    data() {
        return {
            user: []
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        async getUser() {
            const user = await UserServices.getCurrentUser()
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