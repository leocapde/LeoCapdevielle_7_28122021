<template>
    <div id="about_header">
            <img id="logo-about_header" alt="Groupomania logo" src="../assets/icon-left-font-monochrome-white.png">
            <nav id="about-nav">
                <button @click="setUserProfil('')">Fil d'actualité</button>
                <button @click="setUserProfil(currentUser)">Mon profil</button>
                <button @click="getSignout()">Déconnexion</button>
            </nav>
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
    padding: 0 20px;
    background: #BA4D55;
}

#logo-about_header {
    max-width: 200px;
}

#about-nav button {
    margin: 0 5px;
    padding: 15px;
    border-radius: 20px;
}

#about-nav button:hover {
    background: #FFD7D7;
}
</style>