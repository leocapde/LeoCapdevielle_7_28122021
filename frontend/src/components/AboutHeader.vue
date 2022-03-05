<template>
    <div id="about_header">
        <img id="about_header-logo" alt="Groupomania logo" src="../assets/icon-left-font-monochrome-white.png" @click="reload()" />
        <nav id="about_header-nav">
            <div @click="setProfilId('')"><font-awesome-icon icon="fa-solid fa-house" /></div>
            <div @click="setProfilId(currentUser)"><font-awesome-icon icon="fa-solid fa-user" /></div>
            <div @click="getSignout()"><font-awesome-icon icon="fa-solid fa-power-off" /></div>
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
        }),
        reload() {
            location.reload()
        }
    }
}
</script>

<style>
#about_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 10px;
    padding: 0 15px;
    margin: 0 -10px;
    background: #BA4D55;
}

#about_header-logo {
    max-width: 200px;
    cursor: pointer;
}

#about_header-logo:hover {
    opacity: 0.6;
}

#about_header-logo:active {
    transform: translateY(4px);
}

#about_header-nav {
    display: flex;
}

#about_header-nav div {
    margin: 0 5px;
    padding: 10px;
    color: white;
    border-radius: 20px;
}

#about_header-nav div:hover {
    color: #091F43;
    box-shadow: 0 2px 5px;
}

#about_header-nav div:active {
    transform: translateY(4px);
}
</style>