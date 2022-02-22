<template>
    <div id="about_header">
            <img id="logo-about_header" alt="Groupomania logo" src="../assets/images/icon-left-font-monochrome-white.png">
            <nav id="about-nav">
                <button @click="setProfilId('')">Fil d'actualité</button>
                <button @click="setProfilId(currentUser)">Mon profil</button>
                <button @click="getSignout()">Déconnexion</button>
            </nav>
        </div>
</template>

<script>
import UserServices from '../services/UserServices'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            currentUser: localStorage.getItem('userId')
        }
    },
    methods: {
        getSignout() {
            UserServices.signout()
        },
        ...mapActions({
            setProfilId: 'setProfilId'
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
    box-shadow: 2px 2px 10px;
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