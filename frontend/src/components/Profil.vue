<template>
    <div id="profil">
        <div id="profil_header" class="profil-item">
            <img class="profil_header-image" alt="photo de profil" :src="userProfil.imageUrl" v-if="userProfil.imageUrl">
            <img class="profil_header-image" alt="photo de profil" src="../assets/icon.png" v-else >
            <div id="profil_header-name" class="profil-infos">{{ userProfil.firstName }} {{ userProfil.lastName}}</div>
            <font-awesome-icon id="admin-icon" icon="fa-solid fa-shield" v-if="userProfil.isAdmin" />
        </div>
        <div id="profil_age" class="profil-item" v-if="userProfil.age">
            <label class="profil-label">Age :</label>
            <div class="profil-infos">{{ userProfil.age }} ans</div>
        </div>
        <div id="profil_email" class="profil-item" v-if="userProfil.email">
            <label class="profil-label">Email :</label>
            <div class="profil-infos">{{ userProfil.email }}</div>
        </div>
        <div id="profil_job" class="profil-item" v-if="userProfil.job">
            <label class="profil-label">Poste occupé dans l'entreprise :</label>
            <div class="profil-infos">{{ userProfil.job }}</div>
        </div>
        <div id="profil_description" class="profil-item" v-if="userProfil.description">
            <label class="profil-label">Biographie :</label>
            <div class="profil-infos">{{ userProfil.description }}</div>
        </div>
        <div id="profil_update" v-if="userProfil.id == currentUser || isAdmin == 'true'" @click="setProfilModification(true)" >
            <font-awesome-icon icon="fa-solid fa-user-pen" id="profil_update-icon" />
            Modifier le profil
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            currentUser: localStorage.getItem('userId'),
            isAdmin: localStorage.getItem('isAdmin')
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
    margin: 25px 0 35px 0;
    background: white;
    box-shadow: 2px 2px 10px;
    text-align: start;
    padding: 10px;
}

.profil-item {
    margin: 20px 0;
}

#profil_header {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}

.profil_header-image {
    width: 100%;
    max-width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 150px;
    margin-right: 10px;
    box-shadow: 0 2px 5px black;
}

#profil_header-name {
    font-size: 1.5rem;
    font-weight: bold;
}

.profil-label {
    font-weight: bold;
}

.profil-infos {
    margin-top: 2px;
}

#admin-icon {
    margin: 0 5px;
    color: goldenrod;
}

#profil_update {
    border-radius: 20px;
    box-shadow: 2px 2px 5px black;
    margin: 10px auto;
    width: fit-content;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
}

#profil_update:hover {
    background: #BA4D55;
    color: white;
}

#profil_update:active {
    transform: translateY(4px);
}

#profil_update-icon {
    margin-right: 5px;
}
</style>