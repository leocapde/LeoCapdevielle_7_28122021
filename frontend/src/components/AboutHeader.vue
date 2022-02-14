<template>
    <div id="about_header">
            <div>
                <img id="logo-about_header" alt="Groupomania logo" src="../assets/icon-left-font.png">
            </div>
            <nav id="about-nav">
                <button @click="setUserProfil('')">Fil d'actualité</button> -- 
                <button @click="setUserProfil(currentUser)">Mon profil</button>
            </nav>
            <button @click="getSignout()">Déconnexion</button>
        </div>
</template>

<script>
import UserServices from '../services/UserServices'
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            currentUser: localStorage.getItem('userId')
        }
    },
    computed: {
        ...mapState({

        })
    },
    methods: {
        getSignout() {
            UserServices.signout()
        },
        ...mapActions({
            setUserProfil: 'setUserProfil'
        })
    }
}
</script>

<style>
#about_header {
    max-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
}

#logo-about_header {
    height: 200px;
}
</style>