<template>
    <div id="about_header">
            <div>
                <img id="logo-about_header" alt="Groupomania logo" src="../assets/icon-left-font.png">
            </div>
            <nav id="about-nav">
                <button @click="aboutModePubication()">Accueil</button> -- 
                <button @click="aboutModeProfil()">Profil</button>
            </nav>
            <button @click="getSignout()">Déconnexion</button>
        </div>
</template>

<script>
import UserServices from '../services/UserServices'
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            getAboutMode: 'aboutMode'
        })
    },
    methods: {
        getSignout() {
            UserServices.signout()
        },
        aboutModePubication() {
            this.$store.dispatch('setAboutMode', 'publication')
        },
        aboutModeProfil() {
            this.$store.dispatch('setAboutMode', 'profil')
        }
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