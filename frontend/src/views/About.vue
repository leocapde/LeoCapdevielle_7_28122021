<template>
    <div id="about">
        <header>
            <div>
                <img id="logo-header" alt="Groupomania logo" src="../assets/icon-left-font.png">
            </div>
            <nav id="about-nav">
                <button @click="aboutModeNews()">Accueil</button> -- 
                <button @click="aboutModeProfil()">Profil</button>
            </nav>
            <button @click="getSignout()">Déconnexion</button>
        </header>

        <News v-if="getAboutMode == 'news'"/>
        <Profil v-else/>
    </div>
</template>

<script>
import News from '../components/News.vue'
import Profil from '../components/Profil.vue'
import UserServices from '../services/UserServices'
import { mapState } from 'vuex'

export default {
    name: 'About',
    components: {
        News,
        Profil
    },
    computed: {
        ...mapState({
            getAboutMode: 'aboutMode'
        })
    },
    methods: {
        getSignout() {
            UserServices.signout()
        },
        aboutModeNews() {
            this.$store.dispatch('setAboutMode', 'news')
        },
        aboutModeProfil() {
            this.$store.dispatch('setAboutMode', 'profil')
        }
    }
}
</script>

<style>
header {
    max-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#logo-header {
    height: 200px;
}
</style>