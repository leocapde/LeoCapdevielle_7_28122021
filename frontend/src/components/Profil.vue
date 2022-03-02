<template>
    <div id="profil">
        <div id="profil-header">
            <img alt="photo de profil" :src="userProfil.imageUrl" v-if="userProfil.imageUrl">
            <img alt="photo de profil" src="../assets/icon.png" v-else >
            <div id="profil-name">{{ userProfil.firstName }} {{ userProfil.lastName}}</div>
            <font-awesome-icon id="admin-icon" icon="fa-solid fa-shield" v-if="userProfil.isAdmin" />
        </div>
        <div id="profil-age" v-if="userProfil.age">
            <span class="profil-span">Age: </span>{{ userProfil.age }} ans
        </div>
        <div id="profil-email" v-if="userProfil.email">
            <span class="profil-span">Email: </span>{{ userProfil.email }}
        </div>
        <div id="profil-job" v-if="userProfil.job">
            <span class="profil-span">Poste occupé: </span>{{ userProfil.job }}
        </div>
        <div id="profil-description" v-if="userProfil.description">
            <span class="profil-span">Biographie: </span>{{ userProfil.description }}
        </div>
        <button id="profil-update-button" v-if="userProfil.id == currentUser" @click="setProfilModification(true)">Modifier le profil</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            currentUser: localStorage.getItem('userId'),
        }
    },
    props: {
        profilId: { required: true }
    },
    watch: {
        profilId() {
            this.setUserProfil(this.profilId)
        }
    },
    mounted() {
        this.setUserProfil(this.profilId)
    },
    computed: {
        ...mapState({
            userProfil: 'userProfil',
            profilModification: 'profilModification'
        })
    },
    methods: {
        ...mapActions({
            setProfilModification: 'setProfilModification',
            setUserProfil: 'setUserProfil'
        })
    }
}
</script>

<style>
#profil {
    border-radius: 20px;
    margin: 10px 0;
    background: white;
    box-shadow: 2px 2px 10px;
    text-align: start;
    padding: 10px;
}

#profil > div {
    margin: 10px 0;
}

#profil-header {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#profil-header > img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    padding: 1px;
    border-radius: 150px;
    margin-right: 10px;
}

#profil-name {
    font-size: 1.5rem;
    font-weight: bold;
}

#admin-icon {
    margin: 0 5px;
    color: goldenrod;
}

#profil-update-button {
    margin-top: 10px;
    padding: 10px;
    border-radius: 20px;
    background: lightgray;
}

#profil-update-button:hover {
    font-style: italic;
}

.profil-span {
    font-weight: bold;
}
</style>